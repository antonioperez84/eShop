import mongoose from "mongoose";

const pedidoSchemas = new mongoose.Schema({
	
	usuario:{
		type: String,
		required: true
	},
  productos:{
		type: Array,
		required: true
	},
	total:{
		type: String,
		required: true
	},
	fecha:{
		type: String
	} 
})

export default mongoose.model("Pedidos", pedidoSchemas);