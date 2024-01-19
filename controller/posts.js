const Post = require("../model/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const savedPost = await post.save();

    res.status(200).json({
      success: true,
      post: savedPost,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error while creating post",
      success: false,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("comments")
      .populate("likes")
      .exec();

    res.status(200)
    .json({
        success: true,
        posts
    })
  } catch (error) {
    res.status(400)
    .json({
        success: false,
        error: "Error while getting posts",
    })
  }
};
