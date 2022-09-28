const express = require("express");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/authroute");
var bodyParser = require("body-parser");
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
const uri =
  "mongodb+srv://amanpanwar:aman@cluster0.iyywu.mongodb.net/?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
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
    console.log("recieved message : ", data.message);
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
