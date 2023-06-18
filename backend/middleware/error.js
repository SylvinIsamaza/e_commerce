module.exports =(err,req,res,next)=>{
    err.statusCode=err.statusCode||500;
    err.message=err.message||"internal server error"
    if(err.name="CastError"){
const message=`Requested resources wit id ...is not found${err.path}`
err=new errorHandler(message,400)
    }
    if(err.code==1100){
        const message=`Duplicate key ${Object.keys(err.keyValue)} entered
        `
        err=new errorHandler(message,400) 
    }
    if(err.name=='JsonWebTokenError'){
    const message='Your url is invalid please try again later'
    err=new errorHandler(message,400) 
    }
    if(err.name=='TokenExpiredError'){
        const message="Your url is expired please try again later"
        err=new errorHandler(message,400) 
    }
  return  res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}