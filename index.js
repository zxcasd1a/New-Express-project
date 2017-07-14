var express = require("express");
var hbs = require("hbs");
var fs = require("fs");


var app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

//app.use((req, res, next) =>{
//    res.render("error");
//    
//});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) =>{
    var now = new Date().toString();
    var log = now + req.method +req.url;
    
    console.log(log);
    fs.appendFile('server.log', log + '\n');
    next();
});



hbs.registerHelper('getCurrentYear', () =>{
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) =>{
   return text.toUpperCase(); 
});

app.get("/", (req, res) => {
    res.render("about", {
        pageTitle:'About Page'
        
    });
});

app.get("/about", (req, res) => {
    res.render("home", {
        title:"Your new home",
        welcome: "Hello you"
    });
});

app.listen(3000, () => {
console.log("Serever has nude girl...")           
 });