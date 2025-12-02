const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/events', (req, res) => {
    const event = req.body;
    console.log('Received Event:', event);

    // Posts
    axios.post('http://posts:4000/events', event).catch((err) => {
        console.error('Error forwarding event to posts service:', err.message);
    });
    // Comments
    axios.post('http://comments:4001/events', event).catch((err) => {
        console.error('Error forwarding event to comments service:', err.message);
    });
    // Query
    axios.post('http://query:4002/events', event).catch((err) => {
        console.error('Error forwarding event to query service:', err.message);
    });
    
    res.json({ status: 'OK' });
});

const PORT = 4005;
app.listen(PORT, () => {
    console.log(`event-bus service`);
    console.log(`server is running on http://localhost:${PORT}/`);
});