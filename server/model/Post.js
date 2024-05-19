const mongoose = require("mongoose");
const commentSchema = require("./Comment");

const postSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  { strict: true, timestamps: true }
);

const Post = mongoose.models.banners || mongoose.model("Posts", postSchema);

module.exports = Post;
