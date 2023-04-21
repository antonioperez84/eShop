import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ProductosDB"
//export const MONGODB_URI = 'mongodb+srv://antonio.vecwlnu.mongodb.net/ProductosDB' //'mongodb://antonioperez84:'+ encodeURIComponent('v2UmRNz5_rff3%i')+ '@antonio.vecwlnu.mongodb.net/?retryWrites=true&w=majority'
export const PORT = process.env.PORT || 4000 
