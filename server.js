var express= require('express');
var app= express();

var router= express.Router();
var bodyParser=require('body-parser');
var path= __dirname;
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var customers=[];
router.use(function(req,res,next){
    console.log("/"+ req.method);
    next();
});

app.get('/', function(req,res){
    res.sendFile(path + "index.html");

});
app.post('/api/customers/save',function(req,res){
    console.log("post a customer:" + JSON.stringify(req.body));
    var customer={};
    customer.firstname=req.body.firstname;
    customer.lastname=req.body.lastname;
    customers.push(customer);

    return res.send(customer);

});
app.get('/api/customers/all',function(req,res){
    console.log("get all customers");
    return res.send(customers);

});

app.use('/', router);
app.use('*',function(req,res){
    console.log('not found page');
    res.send('NOT FOUND PAGE');
});

app.listen(3000, function(){
    console.log("The server running on 3000 port");
});
