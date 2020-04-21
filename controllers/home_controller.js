const Post= require('../models/post');
const Comment= require('../models/comment');
const User= require('../models/user');
const Like= require('../models/like');
module.exports.shil=function(req,res)
{
   Post.find({},function(err,posts)
   {
      if(err)
      {
          console.log('error in fetching contacts');
          return;
      }
      Comment.find({},function(err,comments)
      {
       if(err)
       {
          console.log('Error in fetching comments');
          return;
       }
       User.find({},function(err,users)
      {
      if(err)
      {
          console.log('error in fetching users');
          return;
      }
      Like.find({},function(err,likes)
      {
      if(err)
      {
         console.log('error in fetching likes',err);
      }
      return res.render('home',{ // setting the title of the page dynamically by giving the value,
         post_List:posts,
        comment_List:comments,
        user_List:users,
        likes_List:likes,
         title:'codial'  
      });
      });
   });
});
      });
     /* Post.find({}).populate('user').exec(function(err,posts)
      {
         if(err)
         {
             console.log('error in fetching contacts');
             return;
         }
         return res.render('home',{ // setting the title of the page dynamically by giving the value,
            post_List:posts,
            title:'codial'  
         });
      });*/

}