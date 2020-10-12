const express = require('express');
const cors= require('cors');
const monk = require('monk');


const app = express();
const db = monk('localhost/twitterclose');

const tweet = db.get('tweets');


app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.json({
        message: 'TwitterClone :)'
    });
});

app.get('/posts', (req,res)=>{
tweet.find()
.then(tweet=>{
res.json(tweet);
});
});

function isValidPost(posts){
    return posts.name && posts.name.toString().trim()!=='' &&
     posts.content && posts.content.toString().trim()!=='';
}

app.post('/posts', (req,res)=>{
if(isValidPost(req.body)){
    const posts ={
        name: req.body.name.toString(),
        content: req.body.content.toString(),
        created: new Date()
    };
    tweet
    .insert(posts)
    .then(createdPosts =>{
        res.json(createdPosts);
    });

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