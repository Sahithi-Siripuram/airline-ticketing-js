var express = require('express');
var app=express();
app.use(express.static(__dirname+'/frontend'));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/frontend/index.html");
})
app.get('/home',function(req,res){
    res.sendFile(__dirname+"/frontend/index.html");
})
app.get('/bookflight',function(req,res){
    res.sendFile(__dirname+"/frontend/bookflight.html");
})
app.get('/myflights',function(req,res){
    res.sendFile(__dirname+"/frontend/myflights.html");
})
var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log('site run on http://localhost:'+port);
});
