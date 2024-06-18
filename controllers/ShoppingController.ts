import { NextFunction , Request, Response} from "express";
import { FoodDoc, Vandor } from "../models";

export const GetFoodAvailablity = async(req:Request, res:Response, next:NextFunction)=>{
    const pinCode = req.params.pincode;
    const result = await Vandor.find({pinCode, serviceAvailable:false})
    .sort([['rating','descending']])
    .populate("foods");

    if(result.length > 0){
        return  res.status(200).json(result);
    }
    return res.status(400).json({message:'Data not found'});
};


export const GetTopRestruent = async(req:Request, res:Response, next:NextFunction)=>{
    const pinCode = req.params.pincode;
    const result = await Vandor.find({pinCode, serviceAvailable:false})
    .sort([['rating','descending']])
    .limit(10);

    if(result.length > 0){
        return  res.status(200).json(result);
    }
    return res.status(400).json({message:'Data not found'});
};

export const GetFoodUnder30Min = async(req:Request, res:Response, next:NextFunction)=>{
    const pinCode = req.params.pincode;
    const result = await Vandor.find({pinCode, serviceAvailable:false}).populate('foods');

    if(result.length > 0){

        let foodResult:any = [];
        result.map(vandor=>{
            const foods = vandor.foods as [FoodDoc];
            foodResult.push(...foods.filter(food=>food.readyTime <= 30));
        })
        return  res.status(200).json(foodResult);
    }
    return res.status(400).json({message:'Data not found'});
};

export const SearchFoods = async(req: Request, res:Response, next:NextFunction)=>{
    const pincode = req.params.pincode;
    
    const result = await Vandor.find({pinCode: pincode, serviceAvailable:false}).populate("foods");
    if(result.length > 0){
        let foodResult:any = [];
        result.map(item=>foodResult.push(...item.foods))
        return res.status(200).json(foodResult);
    }
    return res.status(400).json({message:"Data Not found"});
}

export const RestaurantById = async(req:Request, res:Response, next:NextFunction)=>{
    const id = req.params.id;
    const result = await Vandor.findById(id).populate("foods");
    if(result){
        return res.status(200).json(result);
    }
    return res.status(400).json({message:"Data not found"});
}