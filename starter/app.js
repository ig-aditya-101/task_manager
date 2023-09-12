const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.static('./public'))
app.use(express.json());

//routes

app.get("/hello", (req, res) => {
  res.send("TaskManagerApp");
});
app.use("/api/v1/tasks", tasks);

//app.get('/api/v1/tasks')    -get all the tasks
//app.post('/api/v1/tasks')   -get all the tasks
//app.get('/api/v1/tasks/:id') get single  tasks
//app.patch('/api/v1/tasks/:id')   update task
//app.delete('/api/v1/tasks/:id') delete task

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("sun rha hu mai"));
  } catch (err) {
    console.log(err);
  }
};
start();
