var fs = require('fs');
var express = require('express');
var app = express();

var config = JSON.parse(fs.readFileSync("config.json").toString());

app.get('*',function(req,res) {
    var url = req.url.toLowerCase();
    if(config.mappings[url]) return res.redirect(config.mappings[url]);
    res.status(404).send("invalid path " + req.url);
});

app.listen(config.port, function(){
    console.log("localhost:"+config.port);
});