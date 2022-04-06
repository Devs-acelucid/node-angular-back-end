const mailService = require('@sendgrid/mail');
const MAIL_API_KEY = "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"
const RecipientModel =  require("../Model/recipientDetails")
mailService.setApiKey(MAIL_API_KEY);

exports.mailServiceFun =  async(req,res)=>{
  const recipientMial = req.body.recipientMial; // it is a array of mail
  const subject= req.body.subject;
  const content =  req.body.content;
  const img =  req.body.img
    const msg = {
        to: recipientMial,//['chandankumar75707@gmail.com'],
        from: {
            name:"acelucid.com",
            email:"chandan.kumar@acelucid.com"
        }, 
        subject: subject,//'Bulk mailService using node.js and express.js ',
        text: content,
        html: img
      };
      mailService.send(msg).then(result=>{
        res.status(200).json({message:"mail send successfully",result:result})
      }).catch(err=>{
        res.status(401).json({message:"somthing going wrong", err:err})
      })
}