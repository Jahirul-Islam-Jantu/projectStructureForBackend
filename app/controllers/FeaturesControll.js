import {DecodeToken, EncodeToken} from "../utils/tokenHelper.js";

export const tokenEncode = async (req, res, next) => {
    let result =  EncodeToken("jahirulislamjantu@gmail.com", "jan742682")
    res.json({token: result})
}

export const tokenDecode = async (req, res, next) => {
    let result = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaGlydWxpc2xhbWphbnR1QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJqYW43NDI2ODIiLCJpYXQiOjE3MzA2OTU1MDgsImV4cCI6MTczMzI4NzUwOH0.DJVPR0p8pcOLZwogr5tASUhoM2gtF2V4RMtxO-dU59o")
    res.json({token: result})
}
