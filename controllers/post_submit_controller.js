const User=require('../models/user');
const post=require('../models/post');
const comment=require('../models/comment');
const Like=require('../models/like');
module.exports.shil=function(req,res)
{
        let new_post=post.create({
           content:req.body.content,
           user:req.user.id
       },function(err,post)
       {
          
           if(err)
           {
               console.log('problem while storing post to db');
               return;
           }
           return res.redirect('/');
       });
       if(req.xhr){
        return res.status(200).json({
            data:{
                post:new_post
            },
            message:"Post created successfully"
        })
    }

}
module.exports.destroy=function(req,res)
{
    post.findById(req.body.shr , function(err,newPost)
    {
        if(err)
        {
            return console.log('SOME PROBS IS THERE',err);
        }
        
          if(newPost.user==req.user.id){
            newPost.remove();

            comment.deleteMany({post : req.body.shr} , function(error){
                if(error){
                    return console.log(error);
                    
                }
                return res.redirect('back');
            })
          }
    })
}
module.exports.delete=function(req,res)
{
    comment.findById(req.body.shi, function(err,new_comment)
    {
        if(err)
        {
            return console.log('SOME PROBS IS THERE',err);
        }
        if(new_comment.user==req.user.id)
        {
            var imp=new_comment.post;
           Like.deleteMany({likeable:new_comment._id,onModel:'Comment'});
            new_comment.remove();
            post.findByIdAndUpdate(imp, { $pull: {comments: req.body.shi}}, function(err, post){
                return res.redirect('back');
            })
        }
        else{
            return res.redirect('back');
        }
        
    })
}