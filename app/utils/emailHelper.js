import sgMail from "@sendgrid/mail";

export const EmailSend = ()=>{

    sgMail.setApiKey(
        "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"
    );

    const msg = {
        to: "jahirulislamjantu@gmail.com",
        from: "jahirulislamjantu@gmail.com", // Use a verified sender address
        subject: "Test Email Subject",
        text: "This email system is for API purpose. in this server i have used this from sendgrid mail.",
    };

    sgMail
        .send(msg)
        .then(() => console.log("Email sent"))
        .catch((error) => console.error("Error sending email:", error.message));

}
// EmailSend()











// import nodemailer from 'nodemailer';
// import {EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_USER} from "../config/config.js"
//
// export const EmailSend = async (EmailTo, EmailText, EmailSubject, EmailHTMLBody)=>{
//     const transporter = nodemailer.createTransport({
//         host: EMAIL_HOST,
//         port: EMAIL_PORT,
//         secure: true,
//         auth: {
//             user: EMAIL_USER,
//             pass: EMAIL_PASSWORD,
//          },
//
//         logger: true,   // Enable Nodemailer logging
//         debug: true
//     })
//     const mailOptions = {
//         from: EMAIL_USER,
//         to: EmailTo,
//         subject: EmailSubject,
//         text: EmailText,
//         html: EmailHTMLBody
//     }
//
//     try {
//         await transporter.sendMail(mailOptions);
//         return true;
//     } catch (error) {
//         console.error('Error sending email:', error);
//         if (error.response) {
//             console.error('SMTP Response:', error.response);
//         }
//         return false;
//     }
// }

