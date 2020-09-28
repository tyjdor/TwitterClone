const express = require('express');
const cors= require('cors');
const { isValidElement } = require('react');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.json({
        message: 'TwitterClone :)'
    });
});

function isValidPost(posts){
    return posts.name && posts.name.toString().trim()!=='' &&
     posts.conten && posts.content.toString().trim()!=='';
}

app.post('/posts', (req,res)=>{
if(isValidPost(req.body)){
    const posts ={
        name: req.body.name.toString(),
        content: req.body.content.toString()
    };
    console.log(posts);

}
else{
    res.status(422);
    res.json({
        message:'Name and content are required'
    })
}
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});