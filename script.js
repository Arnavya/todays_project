    const postArea = document.getElementById("post-area");
    const postBtn = document.getElementById("post-btn");
    const postsContainer = document.querySelector(".posts");

    postBtn.addEventListener("click", function () {
        const postContent = postArea.value.trim();
        if (postContent !== "") {
            // Create a post element
            const postElement = createPostElement(postContent);
            postsContainer.appendChild(postElement);
            postArea.value = "";
        }
    });

    function createPostElement(content) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const postContent = document.createElement("p");
        postContent.textContent = content;

        const commentArea = document.createElement("textarea");
        commentArea.placeholder = "Add a comment...";

        const commentBtn = document.createElement("button");
        commentBtn.textContent = "Comment";
        commentBtn.addEventListener("click", function () {
            const commentContent = commentArea.value.trim();
            if (commentContent !== "") {
                // Create a comment element
                const commentElement = createCommentElement(commentContent);
                postElement.appendChild(commentElement);
                commentArea.value = "";
            }
        });

        const deletePostBtn = document.createElement("button");
        deletePostBtn.textContent = "Delete Post";
        deletePostBtn.addEventListener("click", function () {
            postsContainer.removeChild(postElement);
        });

        postElement.appendChild(postContent);
        postElement.appendChild(commentArea);
        postElement.appendChild(commentBtn);
        postElement.appendChild(deletePostBtn);

        return postElement;
    }

    function createCommentElement(content) {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        const commentContent = document.createElement("p");
        commentContent.textContent = content;

        const editCommentBtn = document.createElement("button");
        editCommentBtn.textContent = "Edit Comment";
        editCommentBtn.addEventListener("click", function () {
            const newContent = prompt("Edit your comment:", content);
            if (newContent !== null) {
                commentContent.textContent = newContent;
            }
        });

        const deleteCommentBtn = document.createElement("button");
        deleteCommentBtn.textContent = "Delete Comment";
        deleteCommentBtn.addEventListener("click", function () {
            commentElement.parentNode.removeChild(commentElement);
        });

        commentElement.appendChild(commentContent);
        commentElement.appendChild(editCommentBtn);
        commentElement.appendChild(deleteCommentBtn);

        return commentElement;
    }
