const express = require('express')
const router = express.Router()

const {isLoggedIn} = require('../middlewares/user')


const {
    signup,
    login,
    logout,
    requestCertificate,
} = require('../controllers/userController')





router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/requestCertificate').post(isLoggedIn, requestCertificate)



module.exports = router