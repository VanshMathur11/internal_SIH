const BigPromise = require('../middlewares/bigPromise'); 


exports.validateCertificate= BigPromise(async (req,res, next) => {            
    

    const {transactionHash} = req.body;


    if(!transactionHash) {
        return next(new CustomError('All fields are mandatory', 400));
    }

    console.log(transactionHash)

    res.status(200).json({
        transactionHash
    })


})