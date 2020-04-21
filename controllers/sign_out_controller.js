module.exports.shil=function(req,res)
{
  req.logout();
  //req.flash('success','Logged out Successfully');
 return  res.redirect('/');
};