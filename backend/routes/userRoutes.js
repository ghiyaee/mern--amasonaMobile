import { express } from "express";
import User from "../models/userModel";
import bcrypt from "bcryptjs"
import { generateToken } from "./utlis";

const userRouter = express.Routre();
userRouter.post('/sign', expressAsyncHandel(async (req, res) =>
{
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      if(bcrypt.compareSync(req.body.password,user.password))
      {
          res.send({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token:generateToken(user)
          })
          return;
       }
        res.status(401),send({message:"ایمیل یا رمز عبور اشتباه است"})
    }
    res.status(401).send({message:'ایمیل یا رمز عبور اشتباه است'})

 }))

