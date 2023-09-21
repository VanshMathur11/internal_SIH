const User = require('../models/user')
const BigPromise = require('../middlewares/bigPromise'); 
const CustomError = require('../utils/customError');
const cookieToken = require('../utils/cookieToken');

exports.signup= BigPromise(async (req,res, next) => {            
    

    const {name, email, password, } = req.body;


    if(!email || !name || !password) {
        return next(new CustomError('All fields are mandatory', 400));
    }


    const user = await User.create({
        name,
        email,
        password,
    })

    cookieToken(user,res);

})


exports.login = BigPromise(async(req,res, next) => {
    const { email, password } = req.body

    if(!email || !password) {
        return next(new CustomError('Fields are mandatory', 400))
    }

    const user = await User.findOne({email}).select("+password")         

    if(!user) {
        return next(new CustomError('You are not registered with us.', 400))
    }

    const isPasswordCorrect = await user.isValidatedPassword(password);

    if(!isPasswordCorrect) {
        return next(new CustomError('Password incorrect', 400))
    } 

    cookieToken(user, res);
})


exports.logout = BigPromise(async(req,res,next) => {
    

    res.cookie('token', null, {
        expires : new Date(Date.now()),
        httpOnly : true
    })

    res.status(200).json({
        success: true,
        message : 'LOGOUT successful'
    })
})


exports.requestCertificate = BigPromise(async(req,res,next) => {

    const {courseId, organisationName} = req.body;


    console.log(courseId, organisationName);

    res.status(200).json({
        message : "Your request has been sent to the organization."
    })
    

})





