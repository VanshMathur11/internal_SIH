const Organization = require('../models/organization')
const mailHelper = require('../utils/emailHelper');
const Request = require('../models/request');
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


    console.log(req.body)

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



    const organization = await Organization.findOne({"name" :req.user.name });


    if(!organization) {
            return next(new CustomError('No such organization found', 400));
    }

    const allRequests = await Request.find({"organisationName" : organization.name});


    res.status(200).json({
        message : "Here you will get all your pending requests.",
        allRequests
    })



})

exports.generate = BigPromise(async(req,res,next) => {

    const {studentId, courseName} = req.body;

    console.log(studentId, courseName);


    const Students = mongoose.model('students', {});
    const currentStudent = await Students.find({$and : [ {"studentId" : studentId},  {"courseName" : courseName}]});




    if(!currentStudent) {
        return next(new CustomError('No such student found', 400));
    }
    
    // const message = currentStudent;


    // try {
    //     await mailHelper({
    //         email : user.email,
    //         subject : 'Please find your certificate',
    //         message
    //     })

    //     res.status(200).send({
    //         success : true,
    //         message : 'Mail was send successfully'
    //     })

    // }catch(error) {
    //     return next(new CustomError(error.message, 500))
    // }




   
    // const Students = mongoose.model('students', {});
    // const student = await Students.findOne({studentId: 2});
    // console.log(student)



    res.status(200).json({
        message : "Here is your certificate which we have mailed to your emailId.",
        currentStudent
    })

})






