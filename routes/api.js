import express from "express"
const router = express.Router()

import * as controller from "../app/controllers/controller.js"
import {createController, readController} from "../app/controllers/controller.js";

// Create
router.post("/createController", controller.createController)
// Read
router.get("/readController", controller.readController)
// Update
router.put("/updateController", controller.updateController)
// Delete
router.delete("/deleteController", controller.deleteController)


export default router