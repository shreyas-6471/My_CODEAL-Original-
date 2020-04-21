const Comment = require('../models/comment');
const Post = require('../models/post');
const commentsMailer=require('../mailers/comments_mailer');
module.exports.shil = function(req, res){
    Post.findById(req.body.post,function(err,post)
    {
                Comment.create({
                content: req.body.content,
                post:req.body.post,
                user: req.user._id
            }, function(err,comment){
                // handle error
                 if(err)
                 {
                     console.log('There is an error pls check to it' );
                 }
                
                post.comments.push(comment);
                post.save();
                comment.populate('user').execPopulate(function(err,commento)
                {
                    if(err)
                    {
                        console.log('Theres a problem',err);
                    }
                    commentsMailer.newComment(commento);
                    res.redirect('/');
                })
               
                });

        });
}


