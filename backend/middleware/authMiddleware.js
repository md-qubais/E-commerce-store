import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //here below we are manipulating the user's request
      req.user=await User.findById(decoded.id).select('-password')
      next();
    } catch (error) {
        console.error(error)
        res.status(404)
        throw new Error('Not authorized, token failed')
    }
  }
  if (!token) {
    res.status(404);
    throw new Error("Not Authorized, no token");
  }
});
