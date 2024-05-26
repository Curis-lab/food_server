import express from 'express';
import { AddFood, GetFood, GetVandorProfile, UpdateVandorCoverImage, UpdateVandorProfile, UpdateVandorServices, VandorLogin } from '../controllers';
import { Authenticate } from '../middlewares';
import multer from 'multer';

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

router.post('/login',VandorLogin);

router.use(Authenticate);
router.get('/profile',GetVandorProfile);
router.patch('/edit',UpdateVandorProfile);
router.patch('/service',UpdateVandorServices);
router.post('/add',upload.single('image'),AddFood);
router.get('/foods',GetFood);
router.patch('/updateCoverImage',upload.single('image'),UpdateVandorCoverImage);


export {router as VandorRoute}