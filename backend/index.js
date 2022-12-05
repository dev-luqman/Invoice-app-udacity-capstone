const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoConnet = require('./utils/database').mongoConnet
const { PORT } = require('./utils/config')

const errorController = require('./controllers/errorController')
const adminRoutes = require('./routes/auth')
const invoiceRoutes = require('./routes/invoice')
const customerRoutes = require('./routes/customer')
const cors = require('cors')

const port = PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
)

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Methods', 'GET,PATCH, PUT, POST, DELETE')
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Authorization, Content-Type, On-behalf-of, x-sg-elas-acl',
//   )
//   next()
// })

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Connection successfully',
    status: 'ok',
    statusCode: 200,
  })
})

app.use('/api/auth', adminRoutes)
app.use('/api/invoice', invoiceRoutes)
app.use('/api/customer', customerRoutes)

// Error Controller
app.use(errorController.get404)
app.use((error, req, res, next) => {
  res
    .status(error.httpStatusCode)
    .json({ msg: 'error found', errorMessage: error })
})
mongoConnet((client) => {
  console.log('client')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
