import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp"
import cookieParser from "cookie-parser"
import * as path from "path"
import router from ".//routes/api.js";
import {MONGODB_CONNECTION, PORT, MAX_JSON_SIZE, URL_ENCODING, WEB_CACHE, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME} from "./app/config/config.js"


const app = express()


//Global app middleware
app.use(cors())
app.use(express.json({limit:MAX_JSON_SIZE}))
app.use(express.urlencoded({extended:URL_ENCODING}))
app.use(hpp())
app.use(helmet())
app.use(cookieParser())


// Rate limiter
const limiter = rateLimit({windowMs:REQUEST_LIMIT_TIME, max:REQUEST_LIMIT_NUMBER})
app.use(limiter)

// web cache

app.set('etag', WEB_CACHE)


// MongoDB connection


// set Api

app.use("/api", router)

// set application storage

app.use(express.static("storage"))

// run app

app.listen(PORT || 3333, ()=>{
    console.log(`app running on port ${PORT}`)
})