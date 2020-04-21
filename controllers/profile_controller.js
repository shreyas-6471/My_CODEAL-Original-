const User=require('../models/user');
const fs=require('fs');
const path=require('path');
module.exports.shil=function(req,res)
{
   User.findById(req.body.ana,function(err,user)
   {
      if(err)
      {
         console.log('Error in finding user');
      }
      return res.render('profile',{
         title:"My codial app",
         user_Info:user
      });
   });
  
};
module.exports.update=async function(req,res)
{
    if(req.params.id==req.user.id){ 
     try{
       let user=await User.findById(req.params.id);
       User.uploadedAvatar(req,res,function(err)
       {
          if(err)
          {
             console.log('multer error',err);
          }
          //console.log(req.file);
          user.name=req.body.shr1;
          user.email=req.body.shr2;
          if(req.file)
          {
            
             //saving the path of the image stored
             user.avatar=User.avatarPath+'/'+req.file.filename;
          
         }
          user.save();
          return res.redirect('/');
       });
     }catch(err)
     {
        res.redirect('back');
     }
  }
  else{
     console.log('error occured');
  }
}