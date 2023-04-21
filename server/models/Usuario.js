import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  usuario:{
		type: String,
  	required: true,
    unique: true
},
	password:{
  	type: String,
  	required: true
  },
	nombre:{
		type: String,
		required: true
	},
	apellidos:{
		type: String,
    required: true
	},
	email:{
		type: String,
    required: true
	},
	tipo:{
		type: Number,
		required: true
	}
})
 
export default mongoose.model("Usuarios", usuarioSchema);