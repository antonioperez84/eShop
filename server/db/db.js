import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { MONGODB_URI } from '../config.js';

mongoose.set('strictQuery', true);

export async function connectDB() {
  try {
    
    const db = await mongoose.connect(MONGODB_URI)
    
    console.log('conectado a ', db.connection.name)

  } catch (error) {
    console.log(error)
  }
}