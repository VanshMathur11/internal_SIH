const Organization = require('../models/organization')
const BigPromise = require('./bigPromise')
const CustomError = require('../utils/customError')
const jwt = require('jsonwebtoken')

exports.isLoggedIn = BigPromise(async(req,res,next) => {


    console.log(req.body)
    const token = req.cookies.token || req.body.token;

    if(!token) {
        return next(new CustomError('Login first to access this page', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    

    req.user = await Organization.findById(decoded.id)     
    
                                                                                
    next();

})