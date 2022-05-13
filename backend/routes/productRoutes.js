import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); //to find all the items it returns all the items fro db
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async(req, res) => {
    const product =await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    }else{
        res.status(404).json({message:"Product not found"})
    }
  })
);

export default router;
