const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

const posts = {};

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.post('/events', (req, res) => {
    
    if (req.body.type === 'PostCreated') {
        const { id, title } = req.body.data;
        posts[id] = { id, title, comments: []};
    }

    if (req.body.type === 'CommentCreated') {
        const { id, content, postId } = req.body.data;
        const post = posts[postId];
        post.comments.push({ id, content });
    }

    console.log(posts);
    res.json({ });
});

const PORT = 5002;
app.listen(PORT, () => {
    console.log('query service');
    console.log(`server is running on http://localhost:${PORT}/`)
});