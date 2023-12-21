const zod=require('zod');
const jwt=require('jsonwebtoken');
// Middleware for handling auth
  function adminMiddleware(req, res, next) {
   const authHeader = req.headers.authorization;
   if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
     return res.status(401).json({ error: "err in token " });
      }
      req.user = user;
      next();
    });
  } else {
 res.status(411).json({msg:"You are not authorized to access this route"});
  }
}

function validEmailPass(req,res,next){
    const{username,password}=req.body;
    const UserSchema=zod.string().min(6).max(25);
    const PasswordSchema=zod.string().min(6,{message:"Password must be atleast 6 characters long"});

    try{
        UserSchema.parse(username);
        PasswordSchema.parse(password);
        next();
    }catch(err){
        res.status(422).json({error:err.errors,msg:"Invalid email or password"});
    }
}

module.exports = {adminMiddleware,validEmailPass};
