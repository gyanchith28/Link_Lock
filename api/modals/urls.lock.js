import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  redirectUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
