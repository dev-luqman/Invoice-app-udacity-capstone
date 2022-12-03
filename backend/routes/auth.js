const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

// /auth/register => GET
router.get('/register', authController.createAdmin)

// /auth/login => POST
router.post('/login', authController.loginAdmin)

// /auth/login => DELETE
router.delete('/login', authController.deleteAdmin)

module.exports = router
