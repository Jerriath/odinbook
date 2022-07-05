// Importing node modules
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


// Defining the UserSchema 
const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    pfp: { 
        data: Buffer,
        contentType: String,
        default: null //Something will go here; TOP logo most likely
    },
    friendReq: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});


// This middleware function will run before a new user is saved. It simply hashes the user password via bcrypt
UserSchema.pre('save', async function(next) {
    const hashedPass = await bcrypt.hash(this.password, 10);
    this.password = hashedPass;
    return next();
})


// This is a custom method attatched to the user schema. It checks to see if some input password is correct by using bcrypt.compare with the hashed password.
UserSchema.methods.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};


module.exports = mongoose.model('User', UserSchema);