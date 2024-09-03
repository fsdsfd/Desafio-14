import { usuarios } from "../src/constants/usuarios.js";

let idUsuario = usuarios.length

const leerUsuarios = ()=>{
    return usuarios
}
const leerUsuario = (id)=>{
    const usuario = usuarios.find(usuario => usuario.id == id) || {}
    return usuario
}
const crearUsuario = (usuario)=>{
    usuario.id = ++idUsuario
    usuarios.push(usuario) 
    return usuario
}
const editUsuario = (id, usuarioEditado)=>{
    usuarioEditado.id = id
    let index = usuarios.findIndex(prod => prod.id == id) 
    usuarios.splice(index, 1, usuarioEditado) 
    return usuarioEditado
}
const eliminarUsuario = (id)=>{
    let index = usuarios.findIndex(prod => prod.id == id)
    console.log(index)
    let usuario = usuarios.splice(index,1)[0] 
    return usuario
}
export default {
    leerUsuarios,
    leerUsuario,
    crearUsuario,
    editUsuario,
    eliminarUsuario
}