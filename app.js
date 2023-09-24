require("dotenv").config()                   

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require("body-parser");


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
app.use(bodyParser.json({ limit: "50mb" }));


const user = require('./routes/user')
const organization = require('./routes/organization')
const validator = require('./routes/validateCertificate')







app.use("/api/v1/usr", user)
app.use("/api/v1/org", organization)
app.use("/api/v1/cer", validator)







module.exports = app