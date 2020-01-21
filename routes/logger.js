//sample midleware 
const logger = function(req,res,next){
    console.log(req.protocol + "://" + req.host);
    next(); //<-- call this to move to the next middleware in the stack.
}

module.exports = logger;