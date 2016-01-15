var fs = require('fs');
var express = require('express');
var app = express();

var mappings = JSON.parse(fs.readFileSync("mappings.json").toString()).mappings;

app.get('*',function(req,res) {
    if(mappings[req.url]) return res.redirect(mappings[req.url]);
    res.status(404).send("invalid path " + req.url);
});

app.listen(3123, function(err){
    console.log("localhost:3123");
});