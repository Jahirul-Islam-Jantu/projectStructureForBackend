import UserModel from "../models/userModel.js";

export const CreateUser = async (req, res) => {
  try {
    let reqBody = req.body;
    let result = await UserModel.create(reqBody);
    if (result) {
      res
        .status(201)
        .json({ message: "User create successfully", user: result });
    } else {
      res.status(400).json({ message: "User create failed" });
    }
  } catch (e) {
    res.status(400).json({ message: "User create failed" });
  }
};

export const getUsers = async (req, res) => {
  try {
    let result = await UserModel.find();
    if (result) {
      res
        .status(200)
        .json({ message: "All Users request send successfully", user: result });
    } else {
      res.status(400).json({ message: "Find user failed" });
    }
  } catch (e) {
    res.status(400).json({ message: "User didn't found" });
  }
};

export const singleUser = async (req, res) => {
  try {
    let email = req.email;
    let id = req._id;
    let result = await UserModel.findOne({ _id: id, email: email });
    if (result) {
      res.status(200).json({ message: "Success", user: result });
    } else {
      res.status(400).json({ message: "Find user failed" });
    }
  } catch (e) {
    res.status(400).json({ message: "User didn't found " });
  }
};

export const updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    let reqBody = req.body;
    let result = await UserModel.updateOne({ _id: id }, reqBody);
    if (result) {
      res.status(200).json({ message: "Success", user: result });
    } else {
      res.status(400).json({ message: "Update User failed" });
    }
  } catch (e) {
    res.status(400).json({ message: "User didn't found " });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await UserModel.updateOne({ id: id });
    if (result) {
      res.status(200).json({ message: "Success", user: UserModel.find() });
    } else {
      res.status(400).json({ message: "Delete User failed" });
    }
  } catch (e) {
    res.status(400).json({ message: "User didn't found " });
  }
};
