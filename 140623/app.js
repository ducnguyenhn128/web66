const express = require('express')
const path = require('path')
const app = express()
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
const http = require('http').Server(app);
const PORT = 5000;
const io = require('socket.io')(http)

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})



const fetchFootballResults = () => {
    const results = [
        { homeTeam: 'Team A', awayTeam: 'Team B', score: '2 - 1' },
        { homeTeam: 'Team C', awayTeam: 'Team D', score: '0 - 0' },
        // Add more results as needed
    ];

    io.emit('footballResults', results);
}

const fetchInterval = setInterval(fetchFootballResults, 5000);
process.on('SIGINT', () => {
    clearInterval(fetchInterval);
    process.exit();
  });

io.on('connection', (socket) => {
    console.log('A user connected');
    // handle disconnect
    socket.on('disconect', () => {
        console.log('An user disconnected');
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})