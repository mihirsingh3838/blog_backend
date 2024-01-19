const Post= require("../model/postModel");
const Comment= require("../model/commentModel");

exports.createComment= async(req, res)=>{
    try {
        const {post, user, body}= req.body;
        //create comment object
        const comment= new Comment({
            post,
            user,
            body
        });
        //save comment
        const savedComment= await comment.save();

        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true} )
        .populate("comments")
        .exec();

        res.status(200)
        .json({
            success: true,
            post: updatedPost,
        })
    } catch (error) {
        res.status(500)
        .json({
            success: false,
            error: "Error while creating comment",
        })
    }
}