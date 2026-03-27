// Librerías
import "rootpath";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

// Archivos de configuración propios
import config from "./middlewares/config.mjs";
import errorHandler from "./middlewares/error-handler.mjs";

// Controladores
import ProductoController from "./controllers/producto.controller.mjs";

// Se instancia el servidor
const app = express();

// Librería en desarrollo para ver las peticiones
app.use(morgan("dev"));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); // decodifica datos del cliente
app.use(bodyParser.json()); // decodifica JSON del cliente
app.use(cors()); // permite conexión desde otros orígenes

// Rutas (endpoints)
app.use("/producto", ProductoController);

// Manejo de errores
app.use(errorHandler);

// Inicia el servidor
app.listen(config.PORT, function () {
  console.log("Server listening on port", config.PORT);
});