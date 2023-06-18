const dotenv=require('dotenv')
dotenv.config()

const nodemailer=require('nodemailer')
 const sendMails=async(option)=>{
    const transporter=nodemailer.createTransport({
        host:'smtp.ethereal.email',
        port:587,
        secure:false,
        auth:{
            user:'otis.koss82@ethereal.email',
            pass:'YTJcbmnkVsKNsafH6g'
        }
    })
    const mailOption={
        from:'otis.koss82@ethereal.email',
        to:option.email,
        subject:option.subject,
        text:option.text
    }
    await  transporter.sendMail(mailOption)
}
module.exports=sendMails