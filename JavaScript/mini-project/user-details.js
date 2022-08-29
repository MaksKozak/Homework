

// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.






let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

let divUserDetails = document.createElement('div');
document.body.appendChild(divUserDetails);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let ul = document.createElement('ul');

        let li = document.createElement('li');
        li.innerHTML = `<h2>${user.id}. ${user.name}</h2>
                              <p>Username - ${user.username}</p>
                              <p>Email - ${user.email}</p>
                              <p>Address - ${user.address.street}, ${user.address.suite}, ${user.address.city} city, ${user.address.zipcode}, Geolocation ${user.address.geo.lat}  ${user.address.geo.lng}</p>
                              <p>Phone - ${user.phone}</p>
                              <p>Website - ${user.website}</p>
                              <p>Compny - ${user.company.name}, ${user.company.catchPharase}, ${user.company.bs}</p>`;
        ul.appendChild(li)


        divUserDetails.appendChild(ul)

    })


let divPost = document.createElement('div');
document.body.appendChild(divPost)



let buttonPost = document.createElement('button');
buttonPost.innerText = 'posts of current user';
divPost.appendChild(buttonPost);



buttonPost.onclick = (e) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(posts => {
                    for (const post of posts) {
                            let postDiv = document.createElement('div');
                            postDiv.innerText = `${post.id} ${post.title}`
                            divPost.appendChild(postDiv);

                let a = document.createElement('a');
                a.href = `post-details.html?id=${post.id}`;
                a.innerText = `info of post`;


                postDiv.appendChild(a);
                document.body.appendChild(postDiv)

                    }
            });
};



