const express = require("express");

const app = express();

app.use("/", (req,res) => {
    res.send("hello world!!")
})

app.listen(3000, ()=> {
    console.log("Server is running at 3000 port.....");
    
})