const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix=Date.now()+'-'+Math.round(Math.random()*1000000);
        console.log(uniqueSuffix)
        filename=file.originalname.split(".")[0];
        cb(null,filename+"-"+uniqueSuffix+'.png')
    }
})


exports.upload=multer({storage:storage })