const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/events', (req, res) => {
    const event = req.body;
    console.log('Received Event:', event);

    axios.post('http://localhost:5000/events', event).catch((err) => {
        console.error('Error forwarding event to posts service:', err.message);
    });

    axios.post('http://localhost:5001/events', event).catch((err) => {
        console.error('Error forwarding event to comments service:', err.message);
    });
    
    res.json({ status: 'OK' });
});

const PORT = 5005;
app.listen(PORT, () => {
    console.log(`event-bus service`);
    console.log(`Server is running on http://localhost:${PORT}/`);
});