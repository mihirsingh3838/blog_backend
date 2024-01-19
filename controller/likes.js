const Post= require("../model/postModel")
const Like= require("../model/likeModel")

exports.likePost= async (req, res) =>{
    try {
        const {post, user}= req.body
        const like= new Like({post, user})

        const savedLike= await like.save()

        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
        .populate("likes").exec()

        res.status(200)
        .json({
            success: true,
            post: updatedPost,
        })
    } catch (error) {
        res.status(400)
        .json({
            success: false,
            error: "Error while liking post",
        })
    }
}

exports.unlikePost= async (req, res)=>{
    try {
        const {post, like}= req.body
        const deletedLike= await Like.findOneAndDelete({post:post, _id:like})
        const updatedPost= await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true})

        res.status(200)
        .json({
            success: true,
            post: updatedPost,
        })
    } catch (error) {
        res.status(400)
        .json({
            success: false,
            error: "Error while unliking post",
        })
    }
}