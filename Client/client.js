console.log('hello');
const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
   event.preventDefault();
   const formData = new FormData(form);
   const name =formData.get('name');
   const content = formData.get('content');
   const posts ={
       name,
       content
   };
   console.log(posts);
});