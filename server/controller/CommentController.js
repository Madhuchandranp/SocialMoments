const Post = require("../model/Post");

exports.createComment = async (req, res) => {
  console.log(req.body.id, "createComment");
  try {
    const _id = req.body.id;
    const post = await Post.findById(_id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const comment = {
      text: req.body.text,
      user: req.body.user,
    };
    post.comments.push(comment);
    await post.save();
    res.status(201).json({ message: "Comment added successfully", post: post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getComments = async (req, res) => {
  console.log(req.params.id,"comments");

  try {
    const post = await Post.findById(req.params.id);
    console.log(post)
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ comments: post.comments });
  } catch (error) {
    console.log("Failed to get Comments", error);
  }
};
