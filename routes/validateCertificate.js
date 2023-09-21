const express = require('express')
const router = express.Router()


const {
    validateCertificate
} = require('../controllers/validateCertificateController')



router.route('/validate').post(validateCertificate)



module.exports = router