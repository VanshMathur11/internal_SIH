const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const orgSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please provide the name'],                
        maxlength : [40, 'Name should be under 40 characters'],
    },
    email : {
        type : String,
        required : [true, 'Please provide an email'],                
        validate : [validator.isEmail, 'Please provide a valid email'],
        unique : true
    }, 
    password : {
        type : String,
        required : [true, 'Please provide a password'],                
        minlength : [4, 'Password should be atleast of length 4'],
        select : false,                                                
    },
    createdAt : {
        type : Date,
        default : Date.now                              
    },
})


orgSchema.pre('save', async function(next) {            

    if(!this.isModified('password')) {
        return next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});






orgSchema.methods.isValidatedPassword = async function (usersendPassword) {
   return await bcrypt.compare(usersendPassword, this.password)
}





orgSchema.methods.getJwtToken = function() {
    return jwt.sign({id : this._id}, process.env.JWT_SECRET, {                 
        expiresIn : process.env.JWT_EXPIRY
    })                             
}



module.exports = mongoose.model('Organization', orgSchema)