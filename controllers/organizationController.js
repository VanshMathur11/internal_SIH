const Organization = require('../models/organization')
const BigPromise = require('../middlewares/bigPromise'); 
const CustomError = require('../utils/customError');
const cookieToken = require('../utils/cookieToken');
const mongoose = require("mongoose");


exports.signup= BigPromise(async (req,res, next) => {            
    

    const {name, email, password, } = req.body;


    if(!email || !name || !password) {
        return next(new CustomError('All fields are mandatory', 400));
    }


    const user = await Organization.create({
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

    const user = await Organization.findOne({email}).select("+password")         

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



exports.getRequests = BigPromise(async(req,res,next) => {


    console.log("fetching all the requests")

    res.status(200).json({
        message : "Here you will get all your pending requests."
    })



})

exports.generate = BigPromise(async(req,res,next) => {

    const {info} = req.body;

   
    const Students = mongoose.model('students', {});

    const student = await Students.findOne({studentId: 2});

    console.log(student)



    console.log(info);

    res.status(200).json({
        message : "Here is your certificate which we have mailed to your emailId."
    })

})






