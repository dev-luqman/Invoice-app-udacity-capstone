// config.js
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
}



// "dependencies": {
//   "dotenv": "^16.0.3",
//   "express": "^4.18.2",
//   "mongodb": "^4.12.1",
//   "nodemon": "^2.0.20"
// }