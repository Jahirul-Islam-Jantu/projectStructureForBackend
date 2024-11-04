import {DecodeToken, EncodeToken} from "../utils/tokenHelper.js";
import {EmailSend} from "../utils/emailHelper.js"

export const tokenEncode = async (req, res, next) => {
    let result =  EncodeToken("jahirulislamjantu@gmail.com", "jan742682")
    res.json({token: result})
}

export const tokenDecode = async (req, res, next) => {
    let result = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaGlydWxpc2xhbWphbnR1QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJqYW43NDI2ODIiLCJpYXQiOjE3MzA2OTU1MDgsImV4cCI6MTczMzI4NzUwOH0.DJVPR0p8pcOLZwogr5tASUhoM2gtF2V4RMtxO-dU59o")
    res.json({token: result})
}


export const SendEmail = async (req, res, next) => {
    const EmailTo = "jahirulislamjantu002@gmail.com";
    const EmailText = "This is a demo email text sent from server";
    const EmailSubject = "This is an email subject";
    const EmailHTMLBody = "This is Email Body";

    const result = await EmailSend(EmailTo, EmailText, EmailSubject, EmailHTMLBody);

    if (!result) {
        return res.status(500).json({ emailStatus: false, message: "Failed to send email." });
    }
    return res.json({ emailStatus: true });
};
