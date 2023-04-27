const nodemailer = require('nodemailer')

const sendEmail = (clientName, phoneNumber, email, content) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'teronum.developers@gmail.com',
                pass: 'dev_Team_#3'
            }
        })
        let mailOptions = {
            from: email,
            to: 'teronum.developers@gmail.com',
            subject: clientName + ' --- ' + phoneNumber,
            html: `<b> ${clientName}  ---  ${phoneNumber}</b>  <p>${content}</p>`
        }
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log("Error occurs when send email: ", err)
            } else {
                console.log('Successfully sent email!!!', info.response)
            }
        })
}



module.exports = sendEmail;