import models from "../models/usuarios.models.js"
const getAll = (req, res) => {
  const usuarios = models.leerUsuarios()
    res.status(200).json(usuarios)

  }

const getOne = (req, res) => { 
    console.log(req.params.id) // Un objeto que tiene adentro el id
    const id = req.params.id // Devuelve un string, por lo que no se puede poner ===, solo ==
    // Hay que avisarle al cliente que quiero que se responda con un status 200
    const usuario = models.leerUsuario(id)
    res.status(200).json(usuario)
  }

const createUsuario = (req, res)=>{
    console.log(req.body) // Para recibir información por el cuerpo de la petición
    const usuario = req.body // A este objeto le agrego una id
    const crearUsuario = models.crearUsuario(usuario)
    //res.status(201).json(crearUsuario)
    res.status(201).redirect('/api/usuarios/')
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