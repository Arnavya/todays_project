console.log("connected");

let post_btn = document.querySelector("#post-btn")

post_btn.addEventListener('click',(e)=>{

    let post_area = document.querySelector("#post-area");
    let post_text = post_area.innerHTML;
    let posts_box = document.querySelector(".posts") //posts box
    let main_post = document.createElement('div');
    main_post.innerHTML = `<div class="main-post">
    <div class="post-main">
        <div class="prof-img">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
        </div>
        <div class="post-right">    
            <div class="post-det">
                <h4>Chay @chay</h4>
                <div class="post-right-btns">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="#">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="#" class="post-delete-btn">
                </div>
            </div>
            
            <div class="post-txt-area">
                <textarea name="post" id="post-area-text" cols="30" rows="10" value="${post_text}}" style="resize: none;"></textarea>
            </div>
            
            <div class="like-cmnt-btns">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="#" class= "comment-main-post">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#">
            </div>
        </div>
    </div>
    
    </div>`

    posts_box.appendChild(main_post);

})

//deleting the post after clicking the delete button of the post
let post = document.querySelector('.main-post')
if(typeof(post != null)){
    post.addEventListener('click',(e)=>{
        let target = e.target;
        if(post.classList.contains('.post-delete-btn')){
            target.parentNode.remove;
        }
    })
}


//adding comments to the post
let comment_btns = document.querySelectorAll('.comment-main-post')
console.log(typeof(comment_post));
comment_btns.forEach(element => {
    element.addEventListener('click',(e)=>{
        let target = e.target;
        let main_post = target.parentNode.parentNode.parentNode;
        let comment_post = main_post.createElement('div')
        comment_post.innerHTML = `<div class="comment-post">
        <div class="prof-img">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
            </div>                        
            <textarea name="#" id="post-area" cols="50" rows="10" style="resize: none;"></textarea>

            <div class="post-right">    
                <div class="post-det">
                    <h4>Naga Chaitanya  @chay</h4>
                    <div class="post-right-btns">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="#">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="#">
                    </div>
                </div>
            
                <div class="post-txt-area">
                    <textarea name="post" id="post-area-text" cols="30" rows="10" disabled = "readonly"></textarea>
                </div>
            
                <div class="like-cmnt-btns">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#">
                </div>
            </div>
        </div>`
        main_post.appendChild(comment_post);
    })
});