import express from "express"
const router = express.Router()

import * as controller from "../app/controllers/controller.js"
// import {demo1 ,createController, readController} from "../app/controllers/controller.js";
import {demo1} from "../app/controllers/controller.js";



// request params & query string
router.post("/demo1/:name/:age/:city", controller.demo1)

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