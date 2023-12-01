//application packages
const express = require('express')
const app = express()

const path = require('path')
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

//add template engine
const hbs = require('express-handlebars');
//setup template engine directory and files extensions
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}))
//setup static public directory
app.use(express.static('public'));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const articleRoutes = require('./routes/article');

//to use article routes
app.use('/', articleRoutes);
app.use('/article', articleRoutes);


const authorRoutes = require('./routes/author'); // import author route
// to use author route
app.use('/author', authorRoutes);

//app start point
app.listen(4000, () => {
    console.log('App us started at http://localhost:4000');
})
