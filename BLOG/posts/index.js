const express = require('express');
const { randomBytes } = require('node:crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

const posts = [];

// app.get('/posts', (req, res) => {
//     res.json(posts);
// });

app.post('/posts/create', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const title = req.body.title;
    const post = {
        id,
        title
    };
    posts.push(post);

    axios.post('http://event-bus:4005/events', {
        type: 'PostCreated',
        data: post
    }).catch((err) => {
        console.error('Error sending event to event bus:', err.message);
    });

    res.status(201).json({ post: post });
});

app.post('/events', (req, res) => {
    // console.log('Received Event:', req.body);
    res.json({ });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log('posts service');
    console.log(`server is running on http://localhost:${PORT}/`)
});