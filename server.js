var express =require("express");
var app = express();
var sql=require("mssql");
app.use(express.static('public'));
app.get("/api",function(req,res){
    
  
    res.send("<h1>helloooo</h1></br><h2>Just try</h2>");

});

app.get("/",function(req,res){
    
  
    res.render("index.html")

});

var config = {
    user: '3LOGIXS\dusvin_j',
    password: '',
    server: '.', // You can use 'localhost\\instance' to connect to named instance
    database: 'SQL_Workshop',
 
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

app.get("/db",function(req,res){
var  executeQuery = function(res, query){             
    sql.connect(config, function (err) {
        if (err) {   
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                 }
                 else {
                        console.log("DB Connected");
                 }
    });
}
});


app.listen(8078,function(){

    console.log("my server is started");
    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
     });
    
    
})