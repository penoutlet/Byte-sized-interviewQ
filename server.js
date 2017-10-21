var express = require('express');

var port = 3000;

var app = express();

app.get('/', (req,res)=> {
  res.sendFile(__dirname + '/index.html');
})
// make this text appear on the webpage and then extract and move field3 to a different div.
app.listen(port, ()=> {
console.log('app listening on port 3000!')
})
