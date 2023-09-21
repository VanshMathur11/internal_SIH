const Organization = require('../models/user')
const BigPromise = require('./bigPromise')
const CustomError = require('../utils/customError')
const jwt = require('jsonwebtoken')

exports.isLoggedIn = BigPromise(async(req,res,next) => {

    const token = req.cookies.token;

    if(!token) {
        return next(new CustomError('Login first to access this page', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await Organization.findById(decoded.id)                                   // we were using 'id' to create jwt token and now we simply use this to get id out of it and search for it 
                                                                                // this req.user is now available where we will use this middleware (containing all the info of the user who called that route)
    next();

})