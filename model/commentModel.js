const mongoose= require('mongoose');

const commentSchema= new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId, //storing id for the model which we want to refer
        ref: "Post" //reference to the model
    },
    user:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    }
});

module.exports= mongoose.model("Comment", commentSchema);