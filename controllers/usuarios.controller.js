import models from "../models/usuarios.models.js"
const getAll = (req, res) => {
  const usuarios = models.leerUsuarios()
    res.status(200).json(usuarios)

  }

const getOne = (req, res) => { 
    console.log(req.params.id)
    const id = req.params.id 
    const usuario = models.leerUsuario(id)
    res.status(200).json(usuario)
  }

const createUsuario = (req, res)=>{
    console.log(req.body) 
    const usuario = req.body
    const crearUsuario = models.crearUsuario(usuario)
    res.status(201).json(crearUsuario)
    
  }
const editarUsuario = (req, res)=>{ 
    const id = req.params.id
    const usuarioEditado = req.body
    console.log(id)
    const editarUsuario = models.editUsuario(id, usuarioEditado)
    res.status(200).json(usuarioEditado)
  }
const deleteUsuario = (req, res)=>{
    const id = req.params.id
    console.log(id)
    const eliminarUsuario = models.eliminarUsuario(id)
    res.status(200).send(eliminarUsuario)
  }
export default {
  getAll,
  getOne,
  createUsuario,
  editarUsuario,
  deleteUsuario

}