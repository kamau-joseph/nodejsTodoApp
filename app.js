var express = require('express');
var app = express();
var todoController = require('./controllers/todocontroller');

//set up template engine
app.set('view engine', 'ejs');
 
//set up static files
app.use(express.static('./public'));

//fire controllers
todoController(app);


app.listen(3000);
console.log('You are listening to port 3000');
