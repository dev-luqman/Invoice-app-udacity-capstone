// config.js
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  VERSION: process.env.VERSION,
  NODE_ENV: process.env.NODE_ENV,
}
