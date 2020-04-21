{
    console.log('Hurrey my script is loaded');
    let createPost=function()
    {
        let imp=$('#shr');
        imp.submit(function(e)
        {
            e.preventDefault();
            $.ajax({
                type='post',
                url:'/post_submit',
                data:imp.serialize(), //For converting data to JSON format
                success: function(data)
                {
                    //let newPost=creatNewPostDom(data.data.post);
                console.log(data);
                }, 
                error:
                {
                    
                }
            })
        })
    }
    createPost();
}
let creatNewPostDom=function(post)
{
    return $(` <div id="${ post._id }">
 
   <section id="user_posts">
       <h3>Post to your Feed</h3>
       <form id="shr" method="POST" action="/post_submit">
        <textarea name="content" cols="30" rows="3"></textarea>
        <button value="submit">Submit</button>
       </form>
   </section>
  
   <section id="display-posts-comments">
       <div>
     
       
                       <p> ${post.content } </p>
                       <p> ${post.user }</p>
                       <form id="delete-post" action="/destroy" method="POST">
                           <input type="hidden" name="shr" value=" ${i.id}">
                           <button value="delete">Delete post</button>
                       </form>
                       
                     
                       </section>
           </div>
        </div>`)
}