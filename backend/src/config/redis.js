//require('dotenv').config();
// const { createClient }  = require('redis');

// const redisClient = createClient({
//     username: 'default',
//     password: process.env.REDIS_PASS,
//     socket: {
//         host: 'redis-19934.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
//         port: 19934
//     }
// });

// module.exports = redisClient;

// require('dotenv').config();
// const { createClient } = require('redis');

// const redisClient = createClient({
//   username: 'default',
//   password: process.env.REDIS_PASS,
//   socket: {
//     host: 'redis-12667.c80.us-east-1-2.ec2.cloud.redislabs.com',
//     port: 11453,
//   }
// });

// redisClient.on('error', (err) => console.error('❌ Redis Client Error:', err));

// const { createClient } = require('redis');
// require('dotenv').config();

// const client = createClient({
//     username: 'default',
//     password: process.env.REDIS_PASS,
//     socket: {
//         host: 'redis-11453.crce276.ap-south-1-3.ec2.cloud.redislabs.com',
//         port: 11453
//     }
// });

// client.on('error', err => console.log('Redis Client Error', err));

// async function connectRedis() {
//     await client.connect();
//     console.log("Redis Connected");
// }

// connectRedis();

// module.exports = client;

const { createClient } = require("redis");
require("dotenv").config();

const client = createClient({
  username: "default",
  password: process.env.REDIS_PASS,
  socket: {
    host: "redis-11453.crce276.ap-south-1-3.ec2.cloud.redislabs.com",
    port: 11453,
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
