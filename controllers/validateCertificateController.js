const BigPromise = require('../middlewares/bigPromise'); 
const CustomError = require('../utils/customError');
const { addStudent, retrieveData } = require("../web3/script");



exports.validateCertificate= BigPromise(async (req,res, next) => {            
    

    console.log(req.body)
    const {transactionHash} = req.body;


    if(!transactionHash) {
        return next(new CustomError('All fields are mandatory', 400));
    }

    console.log(transactionHash)


    const myData = await retrieveData(transactionHash)
    console.log(myData)

    res.status(200).json({
        transactionHash,
        myData
    })


})