const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course}=require('../db');
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const {username,password}=req.body;
    const newAdim= await Admin.create(({username,password}));
        if(!newAdim){
            res.status(500).send("Error signing up admin");
        }else{
            res.status(200).send("Admin  created successfully");
        }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const {courseId,title,description,price,imageLink,published}=req.body;
   const course=  await Course.create({courseId,title,description,price,imageLink,published});
    if(!course){
        res.status(500).send("Error creating course");
    }
    res.status(200).json({msg:"Course created Successfully",courseId:course.courseId});
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses=await Course.find({});
     res.status(200).json({courses});
});

module.exports = router;
