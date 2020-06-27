const jwt=require('jsonwebtoken');

module.exports= function(req,res,next){
    var token;

    if('authorization' in req.headers){
       
        token=req.headers['authorization'].split(' ')[1];
    }
    if(!token) return res.status(403).send({auth:false,message:'no token provided'})
        else
            return jwt.verify(token,process.env.TOKEN_SECREATE,(err,decoded)=>{
                if(err){
                    return res.status(500).send({auth:false,message:'Token authentication failed'})
                }else{
                    // req.username=decoded.username;
                    next();
                }
            })
}