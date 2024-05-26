import { NextFunction, Request, Response } from "express";
import { EditVandorInputs, VandorLoginInput } from "../dto";
import { findVandor } from "./AdminController";
import { GenerateSignature, validatePassword } from "../utility";
import { Food, Vandor } from "../models";
import { CreateFoodInputs } from "../dto/Food.dto";

export const VandorLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = <VandorLoginInput>req.body;
  const existingVandor = await findVandor("", email);

  if (existingVandor !== null) {
    const validation = await validatePassword(
      password,
      existingVandor.password,
      existingVandor.salt
    );
    if (validation) {
      const signature = GenerateSignature({
        _id: existingVandor.id,
        email: existingVandor.email,
        name: existingVandor.name,
      });
      return res.json(signature);
    } else {
      return res.json({ message: "Password is not valid" });
    }
  }
  res.json({ message: "login credential not validate" });
};

export const GetVandorProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user) {
    const existingVandor = await Vandor.findById(user._id);
    return res.json(existingVandor);
  } else {
    return res.json({ message: "user is not found" });
  }
};

export const UpdateVandorProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, phone, address } = <EditVandorInputs>req.body;
  const user = req.user;
  if (user) {
    const existingVandor = await Vandor.findById(user._id);

    if (existingVandor !== null) {
      existingVandor.name = name;
      existingVandor.phone = phone;
      existingVandor.address = address;

      const savedResult = await existingVandor.save();
      return res.json(savedResult);
    }
    return res.json(existingVandor);
  } else {
    return res.json({ message: "user is not found" });
  }
};

export const UpdateVandorServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user) {
    const existingVandor = await Vandor.findById(user._id);

    if (existingVandor !== null) {
      existingVandor.serviceAvailable = existingVandor.serviceAvailable
        ? false
        : true;
      const savedResult = await existingVandor.save();
      return res.json(savedResult);
    }
    return res.json(existingVandor);
  } else {
    return res.json({ message: "user is not found" });
  }
};



export const AddFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user) {
    const { name, description, category, foodType, readyTime, price } = <
      CreateFoodInputs
    >req.body;

    const vandor = await findVandor(user._id);
    if (vandor !== null) {

      //already come in

      const file = req.file as Express.Multer.File;
      const image = file.filename;

      const createFood = await Food.create({
        vandorId: vandor._id,
        name,
        description,
        category,
        foodType,
        readyTime,
        price,
        images:[image],
        rating:0
      });
      vandor.foods.push(createFood);
      const result = await vandor.save();
      return res.json(result);
    }
  }
  return res.json({ message: "Something went wrong!" });
};

export const GetFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user) {
    const foods = await Food.find({vandorId: user._id});
    if(foods !== null){
      return res.json(foods);
    }
  }
  return res.json({ message: "Something went wrong!" });
};
export const UpdateVandorCoverImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user) {
    const vandor = await findVandor(user._id);
    if(vandor !== null){
      const file = req.file as Express.Multer.File;
      vandor.coverImage.push(file.filename);
      const result = await vandor.save();
      return res.json(result);
    }
  }
  return res.json({ message: "Something went wrong!" });
};
