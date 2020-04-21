const Post=require('../../../models/post');
const User=require('../../../models/user');
module.exports.index=  function(req,res)
{
    let posts=Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, posts){
        if(err)
        {
            console.log('error fetching docs',err);
        }
    })
    res.json(200,{
        message:"Lists of posts",
        posts:posts
    })
}