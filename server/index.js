const express = require("express");
const db = require("./config/mongoose");
const router = require("./routes/authroute");
const cors = require("cors");
const port = 8000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`listening to port ${port}`);
  
});
