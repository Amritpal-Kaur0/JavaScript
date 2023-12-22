const {User}=require('../db');

async function userMiddleware(req, res, next) {
    const {username,password}=req.headers;
    const VerifiedUser= await User.findOne({username:username,password:password});    

 if(!VerifiedUser){
    res.status(401).send("Unauthorized");
    return;
 }else{
    next();
 } 
}

module.exports = userMiddleware;