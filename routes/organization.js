const express = require('express')
const router = express.Router()


const {isLoggedIn} = require('../middlewares/organization')


const {
    signup,
    login,
    logout,
    getRequests,
    generate,
} = require('../controllers/organizationController')





router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/getRequests').post(isLoggedIn, getRequests)
router.route('/generate').post(isLoggedIn, generate)
// router.route("/generate").post(generate);









module.exports = router