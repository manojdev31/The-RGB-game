var express = require("express");
var app =express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
   res.render("landing"); 
});

app.get("/game",function(req,res){
    res.render("rgb");
});

app.listen(process.env.PORT,process.env.IP,function(req,res){
   console.log("server is started!!!"); 
});