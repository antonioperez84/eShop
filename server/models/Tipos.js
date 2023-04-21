import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    tipo:{
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model("Tipos", productoSchema);