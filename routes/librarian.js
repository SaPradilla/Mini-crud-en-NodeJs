const express = require('express')
const router = express.Router() 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Librarian = require('../models/Librarian')

//CREATE
router.post('/registro',async (req,res) => {

    const { name,lastname,email,password } = req.body 

    try{ 
        const newLibrian = await  Librarian.create({
            name,
            lastname,
            email,
            password :await bcrypt.hash(password, 10)
        })
        
        res.json(newLibrian)

        }catch (err) {
            console.error(err)
            res.status(500).json({ message: 'Error al crear usuario' })
        }
    
    

}) 

router.post('/login',async (res,req) =>{
    const {name, password} = req.body 
    
    const librarian = await Librarian.findOne({ where: { name } });

    if(!librarian){
        return res.status(404).json({ mensaje: 'Usuario no encontrado'})
    }

    const passwordMatch = await bcrypt.compare(password, librarian.password);

    if(!passwordMatch){
        return res.status(401).jso({ mensaje: 'La contraseña o el usuario es incorrecto.'})
    }

    const token = jwt.sign({ librarianId: librarian.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    })
    
    res.json({ token })

})

//READ
router.get('/:id', (req,res) =>{

    Librarian.findByPk(req.params.id).then(librarian =>{
        res.json(librarian)
    })

})

//UPTADE
router.patch('/:id',(req,res) =>{

    Librarian.update({
        name: req.body.name,
        lastname: req.body.lastname,
        password: req.body.password,
    },{
        where:{
            id: req.body.params.id
        }

    }).then(result => {
        res.json(result)
    })  
    
})

//DELETE
router.delete('/:id',(req,res) =>{
    Librarian.destroy({
        where:{
            id: req.params.id
        }
    })
})


module.exports = router
