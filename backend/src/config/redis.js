const { createClient } = require("redis");
require("dotenv").config();

const client = createClient({
  username: "default",
  password: process.env.REDIS_PASS,
  socket: {
    host: 'redis-12347.crce182.ap-south-1-1.ec2.cloud.redislabs.com',
    port: 12347
  },
});

client.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

async function connectRedis() {
  if (!client.isOpen) {   // ✅ Prevent duplicate connection
    await client.connect();
    console.log("Redis Connected");
  }
}

// async function connectRedis() {
//     await client.connect();
//     console.log("Redis Connected");
// }

//connectRedis();

module.exports =client;
