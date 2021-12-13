const express = require("express");
const { Server } = require("socket.io");
const db = require("./config/mongoose");
const cors = require("cors");
const router = require("./routes/authroute");
const http = require("http");
const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // origin: "http://localhost:3000/profile",
    methods: ["GET", "POST"],
  },
});
app.use("/", router);
io.on("connection", (socket) => {
  console.log(`Successfully connected to socket id = ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`sucessfully disconnected from socket`);
  });
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`joined Room : ${data} with socketid : ${socket.id}`);
  });
  socket.on("message", (data) => {
    socket.to(data.room).emit("recieve_message", data);
  });
});
server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`listening to port ${port}`);
});
