const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create database connection
const db = new sqlite3.Database('database.db');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve index.html as the default page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Serve chatroom.html
app.get('/chatroom.html', (req, res) => {
    res.sendFile(__dirname + '/chatroom.html');
});

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = socketIo(server);

// Define the route for user authentication
app.post('/authenticate', (req, res) => {
    const { chatroomId, password } = req.body;

    console.log(`Authentication request received for chatroom ID: ${chatroomId}`);

    // Check if chat room ID and password match the database
    db.get('SELECT * FROM chatrooms WHERE chatroomId = ? AND password = ?', [chatroomId, password], (err, row) => {
        if (err) {
            console.error('Error during authentication:', err.message);
            res.status(500).json({ success: false, message: 'Internal server error' });
        } else {
            if (row) {
                console.log('Authentication successful');
                // Authentication successful, respond with success message
                res.json({ success: true, message: 'Authentication successful' });
            } else {
                console.log('Authentication failed: Invalid chat room ID or password');
                res.status(401).json({ success: false, message: 'Invalid chat room ID or password' });
            }
        }
    });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for 'sendMessage' event from client
    socket.on('sendMessage', (data) => {
        console.log('Message received:', data);

        // Broadcast the message to all connected clients
        io.emit('receiveMessage', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
