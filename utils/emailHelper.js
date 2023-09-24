const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const fs = require("fs");

const mailHelper = async (option) => {
  

  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.fontSize(25).text(option.message, 100, 100);
  doc.end()

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER, 
          pass: process.env.SMTP_PASS, 
        },
      });
    
      
      const message = {
        from: "vanshmathur00@gmail.com", // sender address
        to: option.email, // list of receivers
        subject: option.subject, // Subject line
        text: option.message, // plain text body
        attachments: [
          {
            filename: "output.pdf",
            path: "output.pdf",
            contentType: "application/pdf",
          },
        ],
      };
  
  
  

    console.log(message)

    await transporter.sendMail(message)

}


module.exports = mailHelper