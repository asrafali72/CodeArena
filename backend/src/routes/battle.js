// const express = require('express');
// const router = express.Router();
// const Battle = require('../models/Battle');
// // Assuming you have your auth middleware here to populate req.result
// // const authMiddleware = require('../middleware/auth'); 

// router.post('/challenge', /* authMiddleware, */ async (req, res) => {
//     try {
//         const userId = req.result._id; 
//         const { problemId } = req.body;

//         if (!problemId) {
//             return res.status(400).send("Problem ID is required");
//         }

//         // Generate a unique room ID
//         const roomId = `room_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
        
//         const battle = await Battle.create({
//             roomId,
//             player1: userId,
//             problemId,
//             status: 'WAITING'
//         });

//         res.status(201).json({ roomId, battle });
//     } catch (error) {
//         res.status(500).send("Internal Server Error: " + error.message);
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Battle = require('../models/Battle');

// 1. Correctly imported without curly braces!
const userMiddleware = require('../middleware/userMiddleware'); 

// 2. Passing the correct middleware function
router.post('/challenge', userMiddleware, async (req, res) => {
    try {
        const userId = req.result._id; 
        const { problemId } = req.body;

        if (!problemId) {
            return res.status(400).send("Problem ID is required");
        }

        const roomId = `room_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
        
        const battle = await Battle.create({
            roomId,
            player1: userId,
            problemId,
            status: 'WAITING'
        });

        res.status(201).json({ roomId, battle });
    } catch (error) {
        console.error("Battle Creation Error:", error);
        res.status(500).send("Internal Server Error: " + error.message);
    }
});

module.exports = router;