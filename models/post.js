// Importing node modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Defining the PostSchema
const PostSchema = new Schema({
    author: { required: true, type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String },
    date: { required: true, type: Date, default: Date.now() },
    likes: { required: true, type: Array, default: [] },
    comments: [{ required: true, type: Schema.Types.ObjectId, ref: 'Comment' }]
})


module.exports = mongoose.model('Post', PostSchema);