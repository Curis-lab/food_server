import { VandorController } from "../../../../controllers";
import { VandorInteractor } from "../../../../interactors/VandorInteractor";
import { Authenticate } from "../../../../middlewares";
import { VandorRepository } from "../../../../repositories/vandorRepository";
import multer from "multer";
import express from 'express';

const router = express.Router();

const imagesStorage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,'images');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString()+'-'+file.originalname);
    }
});

const upload = multer({storage:imagesStorage});

// const images= multer({storage: imagesStorage}).array('images',10);
const repository = new VandorRepository()
const interactor = new VandorInteractor(repository);
const controller = new VandorController(interactor);

router.post('/login',controller.VandorLogin.bind(controller));

router.use(Authenticate);
router.get('/profile',controller.GetVandorProfile.bind(controller));
router.patch('/edit',controller.UpdateVandorProfile.bind(controller));
router.patch('/service',controller.UpdateVandorServices.bind(controller));
router.post('/add',upload.single('image'),controller.AddFood.bind(controller));
router.get('/foods',controller.GetFood.bind(controller));
router.patch('/updateCoverImage',upload.single('image'),controller.UpdateVandorCoverImage.bind(controller));


export {router as VendorRoute}