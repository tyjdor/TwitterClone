const { response } = require("express");
const postsElement = document.querySelector('.posts');
const form = document.querySelector('form');
const API_URL= 'http://localhost:5000/posts';

listAllTweets();


form.addEventListener('submit',(event)=>{
   event.preventDefault();
   const formData = new FormData(form);
   const name =formData.get('name');
   const content = formData.get('content');



   const posts ={
       name,
       content
   };
   
   fetch(API_URL,{
       method:'POST', 
       body: JSON.stringify(posts),
       headers:{
           'content-type': 'application/json'
       }
   }).then(response=> response.json())
   .then(createdPosts=>{
console.log(createdPosts);
listAllTweets();
   });
});
function listAllTweets(){
    fetch(API_URL)
    .then(response=>response.json())
    .then(posts=>{
        console.log(posts);
        posts.reverse();
        posts.forEach(tweet=>{
            const div = document.createElement('div');
            const header = document.createElement('h3');
            header.textContent = tweet.name;
            const contents = document.createElement('p');
            contents.textContent= tweet.content;
            const date = document.createElement('small');
            date.textContent =  new Date(tweet.created);

            div.appendChild(header);
            div.appendChild(contents);
            div.appendChild(date);
            postsElement.appendChild(div);

        });
    });
}