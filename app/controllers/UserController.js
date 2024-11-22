import UserModel from "../models/userModel";

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
