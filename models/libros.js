

module.exports = (sequelize, type) => {
    return sequelize.define('libros',{
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        title: type.STRING,
        description:type.STRING,
        autor: type.STRING,

    })

}