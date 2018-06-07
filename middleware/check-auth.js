const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try {
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1];
            const typeToken = req.headers.authorization.split(" ")[0];
            if(typeToken == 'Bearer'){
                const decode = jwt.verify(token, 'superbossza', function(err, decoded) {
                    if(decoded){
                        req.userCurrentData = decoded;
                        next();
                    }else{
                        throw 'Failed to authenticate token';
                    }
                });
            }else{
                throw 'Failed to authenticate token';
            }
        }else{
            throw 'Require authenticate token';
        }
        
    } catch (err) {
        res.status(401).json({
            error: err
        });
    }
}