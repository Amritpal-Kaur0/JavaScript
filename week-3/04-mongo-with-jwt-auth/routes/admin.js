const { Router } = require("express");
const {adminMiddleware,validEmailPass} = require("../middleware/admin");
const router = Router();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {Admin,Course}=require('../db');
const zod=require('zod');



// Admin Routes
router.post('/signup',validEmailPass, async(req, res) => {
    // Implement admin signup logic
    const{username,password}=req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin=new Admin({username:username,password:hashedPassword});
    newAdmin.save().then((admin)=>{
        res.status(200).json({msg:"Admin created succesfully"});
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    try{
    const{username,password}=req.body;
    const findAdmin= await Admin.findOne({username});
    if(!findAdmin || !(await bcrypt.compare(password, findAdmin.password))){
        res.status(411).json({msg:"Admin doesnot exists in.Please signup"});
    }else{
        const myToken=jwt.sign({username},process.env.SECRET_KEY);
        res.status(200).json({token:myToken});
} 
    }catch(err){
        res.status(500).json({msg:"Error in signin"});
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {courseId, title, description, price, imageLink,published }=req.body;
    const newCourse =await Course.create({courseId, title, description, price, imageLink,published });
    if(!newCourse){
        res.status(411).json({msg:"Error in  creating Course"});
    }else{
        res.status(200).json({msg:"Course created succesfully",courseId:newCourse.courseId});
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses=await Course.find();
    if(!courses){
        res.status(411).json({msg:"Error in  fetching Course"});
    }else{
        res.status(200).json({courses:[{courses}]});
    }
});

module.exports = router;