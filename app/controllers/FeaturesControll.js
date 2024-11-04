import {EncodeToken} from "../utils/tokenHelper.js";

export const tokenEncode = async (req, res, next) => {
    let result =  EncodeToken("jahirulislamjantu@gmail.com", "jan742682")
    res.json({token: result})
}

export const tokenDecode = async (req, res, next) => {

}