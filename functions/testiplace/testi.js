const express = require('express');
// morgan on logger joka kerää infoo:.-D
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

//ejs = embedded javascript
//työnnetään javascriptii htmllän sekaan
app.set('view engine', 'ejs');

//halutaan lähettää kaikkee muuta skeidaa myäs
app.use(express.static('views'));
app.set('views',__dirname + '/views');
//Give the server access to the user input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));


app.get('/', (request, response)=>{
   //response.send("<h1>Prep froforfo</h1>");
    response.render("home.ejs");
});

app.post('/',(request,response)=>{
    const breakfast = request.body.breakfast;
    response.render("results.ejs",{
        data: breakfast
    })
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});
