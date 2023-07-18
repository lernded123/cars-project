const express =require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb-connection-string',(err, client) => {
    
})

app.use(bodyParser.urlencoded({extended: true}))


app.get('/',(request,response) => {
  response.sendFile(__dirname + '/index.html')
    
})

app.post('/carBrands', (req,res) => {
    console.log(req.body);

    res.send('Received the car brand')
})

app.listen(3000, function(){
    console.log('listening on 3000');
})