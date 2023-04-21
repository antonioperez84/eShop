import express from 'express';
import routes from './routes/productos.routes.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './imagenes'
}));

app.use(routes)

export default app;