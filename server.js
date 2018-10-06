var express = require('express');
var app = express();

console.log(__dirname + '/index.html');
app.use(express.static(__dirname + '/pairs'));

let port = 11235;
app.listen(port);
console.log(`working on ${port}`);
