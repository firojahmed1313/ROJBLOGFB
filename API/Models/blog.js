import mongoose from "mongoose";

// CREATE blog MODEL

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",  // user collection name
    require:true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export const Blog =
  mongoose.model.Blog || new mongoose.model("Blog", blogSchema);
