const nodemailer = require('nodemailer');
async function sendMail ({form, to, subject, text, html }) {

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure: false,
        auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }

    });

  

    let info = await transporter.sendMail({
      // js me cay or value same to ek hi likhe ge  ex to:to ho = to 

        from : `inShare<${from}>`,
        to,
        subject,
        text,
        html
    });

     console.log(info);

}

module.exports = sendMail;