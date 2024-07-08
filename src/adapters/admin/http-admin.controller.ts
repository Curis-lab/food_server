import { NextFunction, Request, Response } from "express";
import { CreateVandorInput, IVendorInput } from "../../../dto";
import { Vandor } from "../../../models";
import { GeneratePassword, generateSalt } from "../../../utility";
import { Admin } from "../../../models/Admin";
import { IAdminInteractor } from "../../../interface/IAdminInteractor";

export default class HttpAdminController {
  private interactor: IAdminInteractor;

  constructor(interactor: IAdminInteractor) {
    this.interactor = interactor;
  }
  run(){
    console.log('running');
  }
  async onUpdateVandor(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const vandor = await this.interactor.updateVandor(id, "new name");
    return res.json(vandor);
  }
  async onGetVandorById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const vandor = this.interactor.vandorById(id);
      if (vandor !== null) {
        return res.json(vandor);
      }
      return res.json({ message: "vandor is not exit" });
    } catch (error) {
      next(error);
    }
  }

  async onGetVandors(req: Request, res: Response, next: NextFunction) {
    try {
      const vandors = await this.interactor.allVandors();
      return res.json(vandors);
    } catch (error) {
      next(error);
    }
  }
  async onDeleteVandorById(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const vandor = await this.interactor.vandorById(id);
    if (vandor !== null) {
      const deleted = await this.interactor.deleteVandor(id);
      return res.json({
        message: deleted ? "vandor have been deleted" : "is not delete",
      });
    }
    return res.json({ message: "vandor is not existed" });
  }

  async onCreateVandor(req: Request, res: Response) {
    const {
      name,
      ownerName,
      foodType,
      pinCode,
      address,
      phone,
      email,
      password,
    } = <CreateVandorInput>req.body;

    const existing_vandor = await findVandor("", email);
    if (existing_vandor !== null) {
      return res.json({
        message: "Vandor is existed. You can not create this one.",
      });
    }
    const salt = await generateSalt();
    const userPassword = await GeneratePassword(password, salt);

    const vendorData: IVendorInput = {
      name,
      ownerName,
      foodType,
      pinCode,
      address,
      phone,
      email,
      password: userPassword,
      salt,
      serviceAvailable: false,
      coverImage: [""],
      rating: 2,
    };
    const createVandor = await this.interactor.createVandor(vendorData);
    res.json({ createVandor });
  }
}

export const findVandor = async (id: string | undefined, email?: string) => {
  if (email) {
    return await Vandor.findOne({ email });
  } else {
    return await Vandor.findById(id);
  }
};

export const AdminLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const findAdmin = await Admin.findOne({ email });
  if (findVandor) {
    return res.json(findVandor);
  }
  return res.json({ message: "logined successfullly" });
};
export const AdminRegi = async (req: Request, res: Response) => {
  const { name, password, email, role, address, phone, status } = req.body;
  const salt = await generateSalt();

  const createAdmin = await Admin.create({
    name,
    password,
    email,
    address,
    phone,
    salt,
    status,
    coverImage: [""],
    role,
  });

  return res.json(createAdmin);
};
