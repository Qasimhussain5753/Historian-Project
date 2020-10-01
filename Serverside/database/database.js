const mongoose = require('mongoose');
const { String } = require('window-or-global');
const Familytree = require('../models/familytree.models') 
const timeline = require('../models/timeline.models') 

// const timeline = require('../models/timeline.models')
mongoose.connect('mongodb://localhost/FamilyTimelineDocs1',{ useNewUrlParser: true, useUnifiedTopology: true });

// const Schema = mongoose.Schema;


// const commentSchema = new Schema({
//     text: String ,
//     username: String
// })


// const  postSchema = new Schema({
//     text: String ,
//     username: String,
//     comments: [{
//         type: Schema.Types.ObjectId, ref: 'comment'
//     }]
// })


// const PostModel = mongoose.model('Post', postSchema);
// const CommonModel = mongoose.model('comment', commentSchema);



// const aPost = new PostModel({
//     text: 'Hi there',
//     username: "Qasim Hussain"
// })
// const aComment= new CommonModel({
//     text: "Hi there!!!",
//     username: "mumtaz"
// })
// aComment.save();

// aPost.comments.push({
//     text: "Great post ",
//     username: "Bob"
// })
//  aPost.comments.push(aComment);
// aPost.save((err,data)=>{
//    console.log("data has been add successfully!!", data)
// })
Familytree.findOne({})
.populate({})
.exec((err,timeline)=>{
    console.log(timeline)
})