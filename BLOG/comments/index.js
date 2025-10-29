const express = require('express');
const { randomBytes } = require('node:crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

const postComments = [];

app.get('/posts/:id/comments', (req, res) => {
    res.json(postComments.filter(comment => comment.postId === req.params.id));
});

app.post('/posts/:id/comments', async (req, res) => {
    const postId = req.params.id;
    const content = req.body.content;
    const id = randomBytes(4).toString('hex');
    const comment = {
        id,
        postId,
        content
    };
    postComments.push(comment);

    try {
        await axios.post('http://localhost:5005/events', {
            type: 'CommentCreated',
            data: comment
        });
    }
    catch (err) {
        console.error('Error sending event to event-bus:', err.message);
    }

    res.status(201).json(comment);
});

app.post('/events', (req, res) => {
    // console.log('Received Event:', req.body);
    res.json({ });
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log('comments service');
    console.log(`server is running on http://localhost:${PORT}/`)
});