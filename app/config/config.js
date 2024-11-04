import path from 'node:path'

export const MONGODB_CONNECTION = "mongodb+srv://unchangedjahir:jan742682@mernstack.tose2.mongodb.net/"
export const JWT_SECRET = "e5c843c644b2beaf141e4ed0cdae3d4cf2092f68a5d999335e5ec8d1b1cfddb4"
export const JWT_EXPIRATION_DURATION = 60*60*24*30;

export const EMAIL_HOST = ""
export const EMAIL_PORT = ""
export const EMAIL_USER = ""
export const EMAIL_PASSWORD = ""

export const URL_ENCODING = true
export const MAX_JSON_SIZE = "50mb";

export const REQUEST_LIMIT_TIME = 15*60*1000
export const REQUEST_LIMIT_NUMBER = 3000

export const WEB_CACHE = false
export const PORT = 5050

export function UPLOAD_FOLDER(fileName){
    return path.resolve(process.cwd(), "storage", fileName)
}

