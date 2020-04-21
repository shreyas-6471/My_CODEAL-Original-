const User=require('../models/user');
module.exports.shil=function(req,res)
{
  User.findOne({email:req.body.email},function(err,user)
  {
      if(err)
      {
          console.log('error ocuured');
          return;
      }
  else if(!user)
  {
    User.create(req.body,function(err,user)
    {
      if(err)
      {
          console.log("error while storing");
      }
     return res.redirect('/sign_in');
    });
}
    else{
         return res.redirect('back');
    }
}); 
};
module.exports.createSession=function(req,res)
{
   // req.flash('success','Logged in Successfully');
    return res.redirect('/profile');
}