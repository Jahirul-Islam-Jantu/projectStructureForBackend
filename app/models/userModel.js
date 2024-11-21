import mongoose from "mongoose";

const userModelSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const UserModel = mongoose.model("users", userModelSchema);
export default UserModel;
