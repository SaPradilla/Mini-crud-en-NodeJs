const { Model, DataTypes} = require("sequelize")

const sequelize = require('../db')

 

Libros.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: DataTypes.STRING,
    description:DataTypes.STRING,
    autor: DataTypes.STRING,

    
}, {
    sequelize,
    modelName: "libros"
})

module.exports = Libros