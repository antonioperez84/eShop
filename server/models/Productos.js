import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    precio:{
        type: Number,
        required: true,
        trim: true
    },
    foto:{
        url: String,
        public_id: String,
    }, 
    tipo:{
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model("Productos", productoSchema);