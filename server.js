// Los keywords son palabras claves para que encuentren tus librerias en google o x
// Servidor web: Va a devolver las peticiones
import express from 'express' // Import de ES, la manera antigua es commonsjs, modulos comunes
import usuariosRouter from './routers/usuarios.router.js'
// Ya no se usa más el require y el export
// Hay una manera que es ES module
const app = express()
const PORT = 9999

//! MIDDLEWARE
app.use(express.static('public')) 
app.use(express.json()) // Se va a parsear el json()
app.use(express.urlencoded({extended : true}))

app.use('/', usuariosRouter)

app.all('*', (req,res)=>{
  const {path, method} = req // Desestructuramos de method
  console.log(path)
  console.log(method)
  res.status(404).send({
    ok : false,
    status: 404,
    mensaje: `Algo ocurrió al querer acceder a la ruta ${path}`
  })
})
app.listen(PORT, () => {
    // Si todo sale bien nos devuelve lo siguiente:
    console.log(`Estoy levantando...`)
  console.log(`http://localhost:${PORT}`)
})