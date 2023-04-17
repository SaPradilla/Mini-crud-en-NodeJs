const express = require('express')
const router = express.Router()
const Libros = require('../models/Libros')


router.get('/', (req,res ) => {
    res.send("Prueba")
})



//Crear 
router.post('/', (req,res)=>{
    Libros.create({
        title: req.body.title,
        description: req.body.description,
        autor: req.body.autor
    }).then(libros => {  
        res.json(libros)
    })

})



//Ver
router.get('/:id',(req,res)=>{
    Libros.findByPk(req.params.id).then(libros => {
        res.json(libros)
    })
})

module.exports = router