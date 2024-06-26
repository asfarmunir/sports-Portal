
const path = require("path");
const cors = require("cors");
const express = require("express");
require("dotenv").config(
    { path: path.resolve(__dirname, "../.env") }
);

const app = express(
    cors({
        origin: process.env.SOCKET_CLIENT_URL,
        credentials: true,
        
    })
);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});
app.get('/', (req, res) => {
    res.send(`Server is running and socket is connected from ${process.env.SOCKET_CLIENT_URL} `)}
)

const PORT = process.env.PORT || 5000;

const server = app.listen( PORT , (req, res) => {
    console.log(process.env.SOCKET_CLIENT_URL);
    console.log("server is running on port "+ PORT );
})
const io = require("socket.io")(server, {
    cors: {
        origin: process.env.SOCKET_CLIENT_URL, 
        credentials: true,
    },
    pingTimeout: 60 * 1000,
});

io.on("connection", (socket) => {
    console.log("Connected to socket.io");

    socket.on('matchStart', (teams) => {
        console.log('match Started');
        io.emit('matchStart', teams)
    })

    socket.on('teams', (teamData) => {
        console.log(teamData);
        io.emit('teams', teamData)
    })

    socket.on('footballScore', (footballData) => {
        console.log('football score', footballData);
        io.emit('footballScore', footballData)
    })
    socket.on('basketballScore', (basketballData) => {
        console.log('basketball score', basketballData);
        io.emit('basketballScore', basketballData)
    })
    socket.on('cricketScore', (cricketData) => {
        console.log(cricketData);
        io.emit('cricketScore', cricketData)
    })

    socket.on('matchFinish', (winningTeam) => {
        console.log('match Finished with team win of', winningTeam);
        io.emit('matchFinish', winningTeam)
    })
    socket.on('teamTurn', (turn) => {
        console.log('team turn of: ', turn);
        io.emit('teamTurn', turn)
    })
})