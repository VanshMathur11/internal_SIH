const connectWithDb = require("./config/database"); 

const app = require('./app')
require("dotenv").config()

// require("./config/database");

connectWithDb();
const bodyParser = require("body-parser");


app.listen(process.env.PORT, () => {
    console.log(`Server is running at PORT ${process.env.PORT}`)
})