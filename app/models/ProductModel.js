import mongoose from "mongoose";

const ProductModelSchema = mongoose.Schema({
  productName: { type: String, require: true },
  productDes: { type: String, require: true },
  productStatus: { type: Boolean },
});
const ProductModel = mongoose.model("product", ProductModelSchema);
export default ProductModel;
