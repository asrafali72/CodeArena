const { createClient } = require("redis");
require("dotenv").config();

const client = createClient({
  username: "default",
  password: process.env.REDIS_PASS,
  socket: {
    host: 'redis-18421.c275.us-east-1-4.ec2.cloud.redislabs.com',
    port: 18421
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
