const mongoose =require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://admin:root@cluster0.n6d84ng.mongodb.net/');

const userSchema = new Schema({
  username : String,
  firstName: String, 
  lastName: String,
  password: String,
});

const User = mongoose.model('User', userSchema);
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
	Account,User
}
