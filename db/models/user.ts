import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});
console.log('userSchema', userSchema);
export const userModel = mongoose.model('User', userSchema);
