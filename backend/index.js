const express = require('express');
const app = new express();
const taskRouter = require("./routes/task.route")
const mongoose = require("mongoose");
require("dotenv").config();
mongoose
.connect(process.env.dburl)
.then(()=>{
    console.log("db is connected")
})
.catch((error)=>{
    console.log("db is not connected",error)
})

console.log("hello world ")
app.listen(process.env.PORT,()=>{
    console.log("APP IS LISTENING AT ",process.env.PORT)
})

app.use(express.json());
app.use("/api/tasks",taskRouter);