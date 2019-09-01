const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes")

const server = express();

const SERVER_PORT = 3333;

const mongooConfig = {
  USER: "mandelli",
  PASSWORD: "mandelli",
  DATABASENAME: "productsell",
};

const mongooseConnection = `mongodb+srv://${mongooConfig.USER}:${mongooConfig.PASSWORD}@cluster0-rl2ot.mongodb.net/${mongooConfig.DATABASENAME}?retryWrites=true&w=majority`;

mongoose.connect(mongooseConnection, { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(SERVER_PORT, () => {
  console.log(`Server started on Port ${SERVER_PORT}`);
});