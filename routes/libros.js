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

//Actualizar

router.patch('/:id',(req,res)=>{
    
    Libros.update({
        title: req.body.title,
        description: req.body.description,
        autor: req.body.autor
    },{
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result)
    })
})

// Borrar

router.delete('/:id',(req, res) => { 
    Libros.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result)
    })
})
module.exports = router