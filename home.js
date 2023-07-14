// https://akmandala-9084.onrender.com/
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  res.render("home");
});
app.get("/blackwhite",function(req,res){
  res.render("blackwhite");
});
app.get("/colored",function(req,res){
  res.render("colored");
});
app.get("/buy",function(req,res){
  res.render("buy");
});
app.get("/learn",function(req,res){
  res.render("learn");
});
app.get("/toppicks",function(req,res){
  res.render("toppicks");
});

app.post("/",function(req,res){
  const checkbtn=req.body.button;
  if(checkbtn === "blackwhitebtn"){
    res.redirect("/blackwhite");
  }
  else if(checkbtn === "coloredbtn"){
    res.redirect("/colored");
  }
  else if(checkbtn === "buybtn"){
    res.redirect("/buy");
  }
  else if(checkbtn === "learnbtn"){
    res.redirect("/learn");
  }
  else if(checkbtn === "toppickbtn"){
    res.redirect("/toppicks");
  }
  else if(checkbtn === "learnbtn"){
    res.redirect("/learn");
  }
  else if(checkbtn === "buybtn"){
    res.redirect("/buy");
  }
  // console.log("post method");
});

// Start the server
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
