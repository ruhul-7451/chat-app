const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);
io.on('connection', (socket) => {
    console.log('Made a Connection');
});