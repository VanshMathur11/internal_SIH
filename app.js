require("dotenv").config()                   

const express = require('express')
const cookieParser = require('cookie-parser')



const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cookieParser());


const user = require('./routes/user')
const organization = require('./routes/organization')
const validator = require('./routes/validateCertificate')







app.use("/api/v1/usr", user)
app.use("/api/v1/org", organization)
app.use("/api/v1/cer", validator)







module.exports = app