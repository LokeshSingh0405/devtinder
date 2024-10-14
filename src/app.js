const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/User");

const app = express();

app.use(express.json())

app.get("/user", async (req,res) => { 
  try{
    const users = await User.find({emailId: req.body.emailId})
    res.send(users);
  }
  catch(err){
    res.status(400).send("Something went wrong !!")
  }
})

app.delete("/user", async (req,res)=>{
  const userId = req.body.userID
  try{
    const userToDel = await User.findOneAndDelete({_id:userId})
    res.send("User Del Succesfully ")
  }
  catch(err){
    res.status(400).send("Something went wrong !!")
  }
})



app.get("/feed", async (req,res) => {
  try{
    const users = await User.find({})
    res.send(users);
  }
  catch(err){
    res.status(400).send("Something went wrong !!")
  }
})

app.post("/signup",  async (req,res) => {
  console.log(req.body)
  const user = new User(req.body)
  try{
    await user.save();
    res.send("User Added Succesfully!!")
  }
  catch(err){
    res.status(400).send("Error saving the use" + err.message)
  }
})

connectDB().then(() => {
  console.log("Db connection estabilished !!")
  app.listen(3000, () => {
    console.log("Server is running at 3000 port.....");
  });
})
.catch(() => {
  console.error("Db connection can not be estabilished ")
})
