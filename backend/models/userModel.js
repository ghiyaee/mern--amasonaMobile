import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin:{type:Boolean,default:false,require:true}
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('user', userSchema);
export default User;