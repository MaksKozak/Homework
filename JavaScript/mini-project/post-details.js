let url = new URL(location.href);
console.log(url);
let id = JSON.parse(url.searchParams.get('id'));
console.log(id);

let divPostDetails = document.createElement('div');
document.body.appendChild(divPostDetails)




fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {


        let ul = document.createElement('ul');
        let li = document.createElement('li');
            ul.innerHTML = ` <h2> ID - ${post.id} </h2>
                            <h2> UserID - ${post.userId}</h2> 
                            <h2>  Body  - ${post.body}</h2>
                             `;




        divPostDetails.appendChild(ul)
            }
    )


let divComment = document.createElement('div');
document.body.appendChild(divComment);

let buttonPost = document.createElement('button');
buttonPost.innerText = 'comment of post';
divComment.appendChild(buttonPost);

buttonPost.onclick = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {

                let commentDiv = document.createElement('comment');
                commentDiv.innerHTML = ` <h3>
                                        ${comment.name}
                                        ${comment.email}
                                        ${comment.body}
                                        </h3>`
                divComment.appendChild(commentDiv);


                document.body.appendChild(commentDiv)
            }
        });
};



