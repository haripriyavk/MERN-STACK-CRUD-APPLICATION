var express = require('express');
var server= express();
var routes = require('./routes/routes');
var mongoose = require("mongoose");
const cors= require('cors');
server.use(cors());

mongoose.set('strictQuery',true);



mongoose.connect("mongodb://localhost:27017/est",{useNewUrlParser: true,useUnifiedTopology:true},function checkDB(error)
{
    if (error)
{
    console.log('db error occured')
}
else{
    console.log('started the db server');
}

})

server.use(express.json());
server.use(routes);





server.listen(8000,function check(error)
{
    if (error)
    {
        console.log('error occured')
    }
    else{
        console.log('started the server');
    }
});


