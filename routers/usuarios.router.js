import express from 'express'
import controlador from '../controllers/usuarios.controller.js'
// Get, el Read del CRUD
const usuariosRouter = express.Router()

usuariosRouter.get('/api/usuarios', controlador.getAll)

// GET ONE 

usuariosRouter.get('/api/usuarios/:id', controlador.getOne)

// Post, el Create del CRUD

usuariosRouter.post( '/api/usuarios', controlador.createUsuario)

// Put, el update del CRUD

usuariosRouter.put( '/api/usuarios/:id', controlador.editarUsuario)

// Delete, el delete del CRUD
usuariosRouter.delete( '/api/usuarios/:id', controlador.deleteUsuario)

export default usuariosRouter