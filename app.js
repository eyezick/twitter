const express = require('express')
const app = express()

app.use('/', function(request, response, next){
    console.log('Request is:  ' + request.method + '  ' + request.originalUrl)
    console.log(response.status())
    next()
})



app.get('/', function(request, response){
    response.send('WELCOME BRETHREN!')
})

app.get('/news', function(request, response){
    response.send('News')
})



app.listen(3000, function () {
    console.log('i like big booties')
})