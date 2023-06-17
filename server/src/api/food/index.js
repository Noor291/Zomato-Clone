import express from "express"

import {FoodModel} from "../../database/allModels"
import { validateId } from "../../validation/common.validation";

const Router =express.Router();

/*
 * Route   /
 * Des     Create new food item
 * params  none
 * Access  Public
 * Method  post 
 */


/*
 * Route   /:_id
 * Des     get food by id
 * params  _id
 * Access  Public
 * Method  get 
 */

Router.get('/:_id',async(req,res)=>{
    try{
        const {_id}=req.params;
        await validateId(req.params)
        const foods=await FoodModel.findById(_id);
        return res.json({foods});

    }catch(error){
        return res.status(500).json({
            error:error.message
        })
    }
})

/*
 * Route   /r/:_id
 * Des     get all food of particular restaurannt
 * params  _id
 * Access  Public
 * Method  get 
 */

Router.get("/r/:_id",async(req,res)=>{
    try{
        const{_id}=req.params;
        await validateId(req.params)
        const foods=await FoodModel.find({
            restaurant:_id,
        })
    return req.json({foods});
    }catch(error){
        return res.status(500).json({error:error.message})
    }
})

/**
 * Route     /c/:category
 * Des       Get all food based on particular category
 * Params    category
 * Access    Public
 * Method    GET
 */
Router.get("/c/:category", async (req, res) => {
    try {
      const { category } = req.params;
      await validateCategory(req.params);
      const foods = await FoodModel.find({
        category: { $regex: category, $options: "i" },
      });
  
      if (!foods)
        return res
          .status(404)
          .json({ error: `No food matched with ${category}` });
  
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // /c/non
//   non === non - veg;
//   non === nonsdfwae; 


export default Router