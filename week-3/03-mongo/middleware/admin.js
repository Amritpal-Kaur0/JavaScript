// Middleware for handling auth
const {Admin} = require('../db/');


async function adminMiddleware(req, res, next) {

    const {username,password}=req.headers;
    const VerifiedAdmin= await Admin.findOne({username:username,password:password});    

 if(!VerifiedAdmin){
    res.status(401).send("Unauthorized");
    return;
 }else{
    next();
 }  
}

module.exports = adminMiddleware;