const mongoose = require('mongoose');
const { Schema,models } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
const User =  mongoose.model('User', UserSchema);
module.exports = {
    User
};
