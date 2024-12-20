import express from "express";
const router = express.Router();
import * as FeaturesController from "../app/controllers/FeaturesControll.js";
import * as UserController from "../app/controllers/UserController.js";
import UserMiddleWare from "../app/middleware/authMiddleware.js";

router.get("/feature1/TokenEncode", FeaturesController.tokenEncode);
router.get("/feature2/DecodeToken", FeaturesController.tokenDecode);
router.get("/sendEmail", FeaturesController.SendEmail);
router.get("/feature4/Profile", FeaturesController.Profile);
router.get("/feature5/MyCookies", FeaturesController.MyCookies);
router.get("/feature6/CookieRemove", FeaturesController.CookieRemove);
router.post("/feature7/FileUpload", FeaturesController.FileUpload);
router.post("/userCreate", UserController.CreateUser);
router.get("/getAllUsers", UserController.getUsers);
router.get("/singleUser/:id", UserMiddleWare, UserController.singleUser);
router.post("/updateUser/:id", UserController.updateUser);
router.delete("/deleteUser/:id", UserController.DeleteUser);

// import * as controller from "../app/controllers/controller.js"
// // import {demo1 ,createController, readController} from "../app/controllers/controller.js";
// import {demo1, demo2, formData, file} from "../app/controllers/controller.js";
//import { UserMiddleWare } from './../app/middleware/authMiddleware';

//
//
// // request params & query string
// router.post("/demo1/:name/:age/:city", controller.demo1)
//
// // request body JSON
// router.post("/demo2", controller.demo2)
//
// //request form data JSON
// router.post("/formData", controller.formData)
//
// //request file from user
// router.post("/fileData", controller.file)
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

export default router;
