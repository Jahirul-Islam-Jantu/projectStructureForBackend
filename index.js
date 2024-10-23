import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp"
import cookieParser from "cookie-parser"
import * as path from "path"
import routes from ".//routes/api.js"
import {MONGODB_CONNECTION, PORT, MAX_JSON_SIZE, URL_ENCODING, WEB_CACHE, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME} from "./app/config/config.js"