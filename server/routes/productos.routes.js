import { Router } from "express";
import { getProductos, 
         borrarProducto, 
         crearProducto, getProducto, 
         getProductosFiltro, getTipos, 
         crearUsuario, getUsuario, 
         crearPedido, getPedidosUsuarioId, editarUsuario} from "../controllers/productos.controllers.js";
const router = Router();

router.get("/", getProductos)
router.get("/productos", getProductos)
router.get("/productos/:tipo", getProductosFiltro)
router.post("/nuevoProducto", crearProducto)
router.delete("/productos/:id", borrarProducto)
router.get("/productoDetalle/:id", getProducto)
router.get("/nuevoProducto", getTipos)
router.post("/registro", crearUsuario)
router.post("/login", getUsuario)
router.get("/usuarioDetalle/:id", getPedidosUsuarioId)
router.post("/carrito", crearPedido)
router.put("/editar", editarUsuario)

export default router