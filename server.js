const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
.app.use(express.static("public"));

app.post("/save",(req,res)=>{
  console.log("DATA:", req.body);

  fs.appendFileSync(
    "test-data.txt",
    JSON.stringify(req.body)+"\n"
  );

  res.send("saved");
});


app.listen(3000,()=>{
 console.log("running");
});
