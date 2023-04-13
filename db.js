const Sequelize = require('sequelize')

const LibrosModel = require('./models/libros')

const sequelize = new Sequelize('crudnode','minicrudnode','123',{
    host: 'jdbc:mysql://localhost:3000/minicrudnode',
    dialect: 'mysql'
})


const Libro = LibrosModel(sequelize, Sequelize)

sequelize.sync({ force: false})
    .then(()=> {
        console.log('Tablas sincronizadas')
    })


module.exports = {
    Libro
}