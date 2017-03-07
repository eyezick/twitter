const express = require('express')
const nunjucks = require('nunjucks')
const app = express()


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views');

app.get('/ok', function(request, response){
    response.render( 'index', {title: 'Hall of Fame', people: 'uyiuyoooyuioui'} );
    console.log('okokok')
})


app.get('/', function(request, response){
    response.send('WELCOME BRETHREN!')
})


app.get('/news', function(request, response){
    response.send('News')
})


app.listen(3000, function () {
    console.log('server is running now!')
})

