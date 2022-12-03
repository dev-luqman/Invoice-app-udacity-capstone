const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoConnet = require('./utils/database').mongoConnet
const { PORT } = require('./utils/config')
const errorController = require('./controllers/errorController')
const adminRoutes = require('./routes/auth')
const invoiceRoutes = require('./routes/invoice')
const customerRoutes = require('./routes/customer')

const port = PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Connection successfully',
    status: 'ok',
    statusCode: 200,
  })
})

app.use('/auth', adminRoutes)
app.use('/invoice', invoiceRoutes)
app.use('/customer', customerRoutes)

// Error Controller
app.use(errorController.get404)

mongoConnet((client) => {
  console.log('client')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
