const express=require("express");
const https=require("https");

const app=express();

app.get("/",function(req,res){
    res.send("Server is running.");
    const url="https://api.openweathermap.org/data/2.5/weather?q=sheohar&units=metric&appid=7ab476b1be2fb99695748a6fd4e50b43"
    https.get(url,function(response){
        console.log(response.statusCode)
    })
})

app.listen(3000,function(){
    console.log("server is running!");
})