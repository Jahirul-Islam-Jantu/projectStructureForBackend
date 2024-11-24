import mongoose from "mongoose";

const ProductModelSchema = mongoose.Schema(
  {
    productName: { type: String, require: true },
    productDes: { type: String, require: true },
    productStatus: { type: Boolean },
  },
  { versionKey: false, timeStamps: true }
);
const ProductModel = mongoose.model("product", ProductModelSchema);
export default ProductModel;
