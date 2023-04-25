
const { Model, DataTypes} = require("sequelize")

const sequelize = require('../db')

class Librarian extends Model{}

Librarian.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname:{
        type: DataTypes.STRING,      
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,  
    modelName: "librarian"
})

module.exports = Librarian
