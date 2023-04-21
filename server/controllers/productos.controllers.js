import Productos from "../models/Productos.js"
import Usuario from "../models/Usuario.js";
import Pedidos from "../models/Pedidos.js";
import { uploadImage, deleteImage } from '../libs/cloudinary.js';
import fs from 'fs-extra'
import Tipos from '../models/Tipos.js';

export const getProductos = async (req, res) => {
  try {

    let tipo = ''

    let productos

    if(req.body.tipo)
      tipo = req.body.tipo
    else
      tipo = 'Todos' 

      switch(tipo){ 
      case 'Telefonía':{
        productos = await Productos.find({tipo:"Telefonía"})
        break
      }
      case 'Imagen':{
        productos = await Productos.find({tipo:"Imagen"})
        break
      }
      case 'Todos':
        productos = await Productos.find()
    }
        
    res.send(productos)
  } catch (error) {
    console.log(error)
  }
}

export const getProductosFiltro = async (req, res) => {
  try {

    let tipo = ''

    let productos

    if(req.params.tipo)
      tipo = req.params.tipo
    else
      tipo = 'Todos' 

    switch(tipo){ 
      case 'Telefonía':{
        productos = await Productos.find({tipo:"Telefonía"})
        break
      }
      case 'Imagen':{
        productos = await Productos.find({tipo:"Imagen"})
        break
      }
      case 'Informática':{
        productos = await Productos.find({tipo:"Informática"})
        break
      }
      case 'Todos':
        productos = await Productos.find()
    }
        
    res.send(productos)
  } catch (error) {
    console.log(error)
  }
}

export const crearProducto = async (req, res) => {
  try {
    let {nombre, descripcion, precio, foto, tipo} = req.body

    foto = {
      url: '',
      public_id: ''
    }

    if(req.files?.imagen){
      const result = await uploadImage(req.files.imagen.tempFilePath)  
      foto = {
        url: result.secure_url,
        public_id: result.public_id
      }
      fs.remove(req.files.imagen.tempFilePath)
    }
  
    const nuevoProducto = new Productos({nombre, descripcion, precio, foto, tipo})
    await nuevoProducto.save()

    return res.json(nuevoProducto)
  } catch (error) {
    console.log(error)
  
  }
}

export const borrarProducto = async (req, res) => {
  try {
    const borraProducto = await Productos.findByIdAndDelete(req.params.id)
   
    if (!borraProducto) return res.status(404).send('No existe el producto')

    if(borraProducto.foto.public_id){
      await deleteImage(borraProducto.foto.public_id)
    }

  return res.send('producto borrado')
  } catch (error) {
    return res.status(500).json({mensaje:error.message})    
  }
}

export const getProducto = async (req, res) => {
  try {
    
    const producto = await Productos.findById(req.params.id)
    
    res.send(producto)
  } catch (error) {
    console.log(error)
  }  
}

export const getTipos = async (req,res) => {
  try {
    const tipos = await Tipos.find()
    res.send(tipos)
    
  } catch (error) {
    console.log(error)
  }
}

export const crearUsuario = async (req, res) => {
  try {
    let {usuario, password, nombre, apellidos, email} = req.body
    
    let tipo = new Number(1)
    
    const nuevoUsuario = new Usuario({usuario, password, nombre, apellidos, email, tipo})
    
    await nuevoUsuario.save()

    return res.json(nuevoUsuario)
    
  } catch (error) {
    return res.json(error)
  }

}

export const getUsuario = async(req, res)=>{
  try {
    let {usuario, password} = req.body
    const usuarioExiste = await Usuario.find({usuario:usuario, password:password})
    
    if(usuarioExiste)
      return res.json(usuarioExiste)      
    
    else
      return res.send('Usuario o contraseña incorrectos')
    
    } catch (error) {
    
    }  
}

export const comprobarUsuario = async(req, res)=>{
  try {
    let {usuario} = req.body
    const usuarioExiste = await Usuario.find({usuario:usuario})
    
    if(usuarioExiste)
      return true      
    else
      return false
    
    } catch (error) {
    
    }  
}

export const getPedidosUsuarioId = async(req, res)=>{
  try {
   
    let user = new String(req.params.id)
    const pedidosUsuario = await Pedidos.find({usuario: user})

    let datosUsuario = {pedidosUsuario}

    return res.send(datosUsuario) 
    
    } catch (error) {
      console.log(error.message)
  }  
}

export const crearPedido = async(req, res) =>{
  try {
    
    let {usuario, productos, total, fecha} = req.body
    
    const nuevoPedido = new Pedidos({usuario, productos, total, fecha}) 
    
    await nuevoPedido.save() 

    return res.send("Pedido correcto")
  } catch (error) {
    console.log(error)
  }
}

export const editarUsuario = async(req, res) => {
  try {
    let nuevoUsuario = null
    
    req.body.usuario != req.body.usuarioOriginal ? 
      nuevoUsuario = await Usuario.updateOne({_id: req.body._id},req.body, {new: true})
    : 
      nuevoUsuario = await Usuario.updateOne({_id: req.body._id, 
                                            password: req.body.password,
                                            nombre: req.body.nombre,
                                            apellidos: req.body.apellidos,
                                            email: req.body.email},
                                             {new: true})
    return res.json(nuevoUsuario)

  } catch (error) {
    console.log(error)  
  } 
}