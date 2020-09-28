
const form = document.querySelector('form');
const API_URL= 'http://localhost:5000/posts';


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
   });
});