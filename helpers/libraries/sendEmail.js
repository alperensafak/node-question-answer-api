const nodemailer = require("nodemailer");

const sendEmail = async (mailOptions) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            process: process.env.SMTP_PASS
        }
    });

    let info = await transporter.sendMail(mailOptions); //başarılı olursa info olarak donecek bize
    console.log(`Message sent : ${info.messageId}`);


};

module.exports = sendEmail;