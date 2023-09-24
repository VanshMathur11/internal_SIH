const mongoose = require('mongoose');


const requestSchema = new mongoose.Schema({
    studentId : {
        type : String,
        required : [true, 'Please provide the studentId'],                
    },
    courseName : {
        type : String,
        required : [true, 'Please provide an email'],                
    }, 
    organisationName : {
        type: String,
        required : [true, 'Please provide an organization name'],     
    },
    createdAt : {
        type : Date,
        default : Date.now                              
    },
})



module.exports = mongoose.model('Request', requestSchema)
