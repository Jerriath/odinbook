// Importing node modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Defining the CommentSchema
const CommentSchema = new Schema({
    author: { required: true, type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String },
    date: { required: true, type: Date, default: Date.now() },
    post: { type: Schema.Types.ObjectId, ref: 'Post', default: null },
    comment: { type: Schema.Types.ObjectId, ref: 'Comment', default: null },
    likes: { required: true, type: Array, default: [] },
    comments: [{ required: true, type: Schema.Types.ObjectId, ref: 'Comment' }]
})


module.exports = mongoose.model('Comment', CommentSchema);