import "dotenv/config"
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from "./routes";
import dbConnect from "./db/mongo";

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Inicialización de la app
const app = express();

// Middlewares cors para permitir peticiones desde cualquier dominio
app.use(cors());

// Middlewares morgan para ver las peticiones en consol
app.use(morgan('dev'))

// Middlewares para poder leer los datos de un formulario
app.use(express.json());

// Ruta principal
app.use(router)


// Conexion a la base de datos
dbConnect().then(() => console.log(`Conexión a la base de datos exitosa`))

// Inicialización del servidor
app.listen(PORT, () => { console.log(`Servidor corriendo en el puerto ${PORT}`); })

export default app;
