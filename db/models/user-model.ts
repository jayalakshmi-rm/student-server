import mongoose, {model, Model} from 'mongoose';

export interface IUserModel extends Document {
    username: string;
    password: string;
    emailid: string;
    usertype: string;
    createdAt: Date;
  }  

const schema = mongoose.Schema;
  let UserSchema = new schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    emailid: {
        type: String
    },
    usertype: {
        type: String,
        default: 'student'
    }
});
console.log('my UserSchema', UserSchema);
// UserSchema.pre("save", function(next) {
//     let now = new Date();
//     if (!this['createdAt']) {
//       this['createdAt'] = now;
//     }
//     next();
//   });

export const UserModel: Model<any> = mongoose.model("Profile", UserSchema);
