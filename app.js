const express = require("express");
const app = express();

const errorHandlingMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const port = 3000;
const connectionString = process.env.CONNECTION;

//middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(errorHandlingMiddleware);

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(port, console.log("listening on port " + port));
  } catch (err) {
    console.log(err);
  }
};

start();
