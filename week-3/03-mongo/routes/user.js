const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}=require('../db');

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const {username,password}=req.body;
    const newUser= await User.create(({username,password}));
        if(!newUser){
            res.status(500).send("Error signing up User");
        }else{
            res.status(200).send("User  created successfully");
        }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses=await Course.find({});
     res.status(200).json({course:[courses]});
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const course=await Course.findOne({courseId:req.params.courseId});
    if(!course){
        res.status(500).send("Error finding course");
    }else{
     const updatedUser=await User.findOneAndUpdate(
        {id:req.user},
        {
        $push:{
        purchasedCourses:course
        },
        },
        {new:true}
        )
    }
        res.status(200).send("Course purchased successfully");
    }
);


router.get('/purchasedCourses', userMiddleware, async(req, res) => {
// Implement fetching purchased courses logic
const getUser=await User.findOne(req.user).populate('purchasedCourses');
res.status(200).json({purchasedCourses:getUser.purchasedCourses});

});

module.exports = router;