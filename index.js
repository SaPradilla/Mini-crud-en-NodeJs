
const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const sequelize = require('./db')



//Servidor de escucha

app.listen(3000, function(){
    console.log('El servidor iniciado en: 3000')

    //conectar bd
    sequelize.sync({ force: false }).then(() => {
        console.log('Te has conectado a la base de datos')
    }).catch(error =>{
        console.log('No te has conectado con la base de datos :C',error)
    })

})


// MIddleware
// Configuracion para recibir peticones 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


//Ruta metodo GET




//Ruta metodo POST

app.use('/api/libros', require('./routes/libros'))
app.use('/api/librarian',require('./routes/librarian'))


