const express =require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

const mongoURL = 'mongodb+srv://goodlifesam:JCE3d7uyQBFt0yVP@cluster0.l1z33ll.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(mongoURL)
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('CarModelsAPI')
        const carCollection = db.collection('carBrands')

        app.use(bodyParser.urlencoded({extended: true}))


        app.get('/',(request,response) => {
        response.sendFile(__dirname + '/index.html')
    
        })

        app.post('/carBrands', (req,res) => {
            carCollection
                .insertOne(req.body)
                .then(result => {
                    res.redirect('/');
                })
                .catch(error => console.error(error))
                res.status(500).send('Error inserting data');
        });
   

        app.listen(3000, function(){
        console.log('listening on 3000');
        })

        })
        .catch(error => console.error(error))


