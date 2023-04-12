const express = require('express')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()


// Base de datos mongoDB

MongoClient.connect('mongodb+srv://cherry:sena123@cluster0.fcwvdbm.mongodb.net/?retryWrites=true&w=majority',).then(client => {
    const db = client.db('cherry')
    
    const formularioCollection = db.collection('/formulario')
})


//Servidor de escucha

app.listen(4000, function(){
    console.log('El servidor iniciado en: 4000')
})


// MIddleware
app.use(bodyParser.urlencoded({ extended: true}))



//Ruta metodo GET

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})  
 


//Ruta metodo POST
app.post('/formulario', (req, res) =>{
    formularioCollection
        .insertOne(req,body)
        .then(result => {
            console.log(result)
        })
        .catch(error => console.error(error))
})