require("dotenv").config();
// console.log(process.env); // remove thi
// const connectionString = process.env.CONNECTION;
//   "mongodb+srv://TaskManager:l9XwQkTX9lBjcMBP@cluster0.tpkz7.mongodb.net/TaskManagerSm?retryWrites=true&w=majority";

// console.log(connectionString);

const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("connected");
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
