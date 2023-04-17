
const { Sequelize } = require('sequelize')

const { database } = require('./config')




const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,{
        host: database.host,
        dialect: "mysql"
    }

)

module.exports = sequelize

// const Libro = LibrosModel(sequelize, Sequelize)

// sequelize.sync({ force: false})
//     .then(()=> {
//         console.log('Tablas sincronizadas')
//     })


// module.exports = {
//     Libro
// }