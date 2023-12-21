const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {validEmailPass} = require("../middleware/admin");
const {User,Course}=require('../db');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

// User Routes
router.post('/signup', validEmailPass,async (req, res) => {
    // Implement user signup logic
    const {username,password}=req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser= await User.create(({username,password:hashedPassword}));
        if(!newUser){
            res.status(500).send("Error signing up User");
        }else{
            res.status(200).send("User  created successfully");
        }
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const{username,password}=req.body;
    const findUser= await User.findOne({username});
    if(!findUser || !( bcrypt.compare(password, findUser.password))){
        res.status(411).json({msg:"user doesnot exists in.Please signup"});
    }else{
        const myToken=jwt.sign({username},process.env.SECRET_KEY);
        res.status(200).json({token:myToken});
}
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const courses=await Course.find({});
    if(!courses){
        res.status(500).send("Error finding courses");
    }else{
    res.status(200).json({course:[courses]});
    }
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const course=await Course.findOne({courseId:req.params.courseId});
    if(!course){
        res.status(500).send("Error finding course");
    }else{
     const updatedUser=await User.findOneAndUpdate(
        {id:req.user.id},
        {
        $push:{
        purchasedCourses:course
        },
        },
        {new:true}
        )
        res.status(200).send("Course purchased successfully");
    }
    }
);

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const authHeader = req.headers.authorization;
    if (authHeader) {
     const token = authHeader.split(" ")[1];
     const decoded=jwt.decode(token);
    const getUser=await User.findOne({username:decoded.username}).populate('purchasedCourses');
    console.log(getUser)
res.status(200).json({purchasedCourses:getUser.purchasedCourses});
    }else{
        res.status(500).send("Error finding purchased courses");
    }
});

module.exports = router;