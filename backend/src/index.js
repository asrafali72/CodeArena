const express = require('express');
const http = require('http'); 
const { Server } = require('socket.io'); 
const app = express();

const server = http.createServer(app); 

const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        credentials: true
    }
});

require('dotenv').config();

const main = require('./config/db');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/userAuth");
const redisClient = require('./config/redis');
const problemRouter = require("./routes/problemCreator");
const submitRouter = require("./routes/submit");
const aiRouter = require("./routes/aiChatting");
const videoRouter = require("./routes/videoCreator");
const battleRouter = require('./routes/battle');
const cors = require('cors');

const allowedOrigins = [
  "http://localhost:5173",
  "https://codearena-bly4.onrender.com"
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true 
}));

app.use(express.json());
app.use(cookieParser());

app.use('/user', authRouter);
app.use('/problem', problemRouter);
app.use('/submission', submitRouter);
app.use('/ai', aiRouter);
app.use("/video", videoRouter);
app.use('/battle', battleRouter);

const Battle = require('./models/Battle');

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("join-battle", ({ roomId, userId }) => {
        socket.join(roomId);
        const roomSize = io.sockets.adapter.rooms.get(roomId)?.size || 0;
        if (roomSize === 2) {
            io.to(roomId).emit("battle-started");
        }
    });

    // Listen for the winner and broadcast it to everyone in the room
    socket.on("declare-winner", ({ roomId, winnerId, winnerName, timeTaken }) => {
        io.to(roomId).emit("battle-ended", { 
            winnerId, 
            winnerName,
            timeTaken 
        });
    });
});

const InitalizeConnection = async () => {
    try {
        await Promise.all([main(), redisClient.connect()]);
        console.log("DB Connected");
        
        server.listen(process.env.PORT, () => {
            console.log("Server listening at port number: " + process.env.PORT);
        });
    }
    catch(err) {
        console.log("Error: " + err);
    }
}

InitalizeConnection();

module.exports = { io };