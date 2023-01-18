require("dotenv").config();
require("express-async-errors");

const express = require("express");
const connectDb = require("./db/connect");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const app = express();

const errorHandlerMiddleware = require("./middleware/error-middleware");
const notFoundMiddleware = require("./middleware/not-found-middleware");

const sendMessageRouter = require("./routes/message-router");

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(cors());

app.use("/s_m", sendMessageRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening to port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
