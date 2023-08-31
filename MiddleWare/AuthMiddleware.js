
import dotenv from 'dotenv';
dotenv.config();
import JWT from "jsonwebtoken";

const requireSignin = (req,res,next) => {
  try {
    const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWTSECRET
    )
    next()
  } catch (error) {
    console.log(error);
  }
}


export {requireSignin}
