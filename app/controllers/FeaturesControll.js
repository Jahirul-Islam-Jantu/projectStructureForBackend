import {DecodeToken, EncodeToken} from "../utils/tokenHelper.js";
import {EmailSend} from "../utils/emailHelper.js"
import path from "node:path";


export const tokenEncode = async (req, res) => {
    let result =  EncodeToken("jahirulislamjantu@gmail.com", "jan742682")
    res.json({token: result})
}

export const tokenDecode = async (req, res) => {
    let result = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaGlydWxpc2xhbWphbnR1QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJqYW43NDI2ODIiLCJpYXQiOjE3MzA2OTU1MDgsImV4cCI6MTczMzI4NzUwOH0.DJVPR0p8pcOLZwogr5tASUhoM2gtF2V4RMtxO-dU59o")
    res.json({token: result})
}


export const SendEmail = (req, res) => {
        EmailSend()
      return res.json({
          emailStatus: true,
          email: "sent"

      })

};

export const Profile = async (req, res) => {
    res.json({status: "ok"})
}
export const MyCookies = async (req, res) => {
    let cookieOptions = {
        expires:new Date( Date.now() + 1000 * 1000),
        httpOnly: true,
        sameSite: true,
    }
    let data = "jahirulislamjantu@gmail.com"
    let cookieName = "MyCookie"
    res.cookie(cookieName, data, cookieOptions)
    res.json({response: "ok"})
}

export const CookieRemove = async function(req, res){
    let cookieOptions = {
        expires:new Date( Date.now() - 1000 * 1000),
        httpOnly: true,
        sameSite: true,
    }
    let data = {}
    let cookieName = "MyCookie"
    res.cookie(cookieName, data, cookieOptions)
    res.json({response: "ok"})
}

export const FileUpload = async (req, res) => {
    // Check if files were uploaded
    if (!req.files || !req.files['myStd']) {
        return res.status(400).send({ "Upload Error": "No file uploaded" });
    }

    // Catch the file
    let myStd = req.files['myStd'];
    let myFileName = myStd.name;

    // Create file path
    let myFilePath = path.resolve(process.cwd(), "storage", myFileName);

    // Move the file
    myStd.mv(myFilePath, (err) => {
        if (err) {
            return res.status(500).send({ "Upload Error": err });
        } else {
            return res.status(200).json({ "Upload File": myFilePath });
        }
    });
};







// export const FileUpload = async (req, res) => {
//     // Catch the file
//     let myPic = req.files['myImg']
//     let myFileName = myPic.name
//
//     // create file path
//     let myFilePath = path.resolve(process.cwd(), "storage", myFileName)
//
//     // move the file
//     myPic.mv(myFilePath, (err, data) => {
//         if (err) {
//             return res.status(500).send({"Upload Error": err})
//         }else {
//             return res.status(200).json({"Upload File": myFilePath})
//         }
//     })
// }




// export const SendEmail = async (req, res) => {
//     const EmailTo = "jahirulislamjantu002@gmail.com";
//     const EmailText = "This is a demo email text sent from server";
//     const EmailSubject = "This is an email subject";
//     const EmailHTMLBody = "This is Email Body";
//
//     const result = await EmailSend(EmailTo, EmailText, EmailSubject, EmailHTMLBody);
//
//     if (result) {
//     return res.json({ emailStatus: true });
//     }
//     return res.status(500).json({ emailStatus: false, message: "Failed to send email." });
// };
