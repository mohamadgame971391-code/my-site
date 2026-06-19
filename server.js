const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let data = [];

app.post("/save", (req,res)=>{
    data.push(req.body);
    res.send("saved");
});

app.get("/admin",(req,res)=>{
    res.json(data);
});

app.listen(3000,()=>{
    console.log("running");
});
