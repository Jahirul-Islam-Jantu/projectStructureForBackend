import express from "express"
const router = express.Router()

import * as controller from "../app/controllers/controller.js"
// import {demo1 ,createController, readController} from "../app/controllers/controller.js";
import {demo1, demo2, formData, file} from "../app/controllers/controller.js";



// request params & query string
router.post("/demo1/:name/:age/:city", controller.demo1)

// request body JSON
router.post("/demo2", controller.demo2)

//request form data JSON
router.post("/formData", controller.formData)

//request file from user
router.post("/file", controller.file)
/*
// Create
router.post("/createController", controller.createController)
// Read
router.get("/readController", controller.readController)
// Update
router.put("/updateController", controller.updateController)
// Delete
router.delete("/deleteController", controller.deleteController)
 */

export default router