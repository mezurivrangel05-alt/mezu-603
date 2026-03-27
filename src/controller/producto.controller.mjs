// Este controlador obtiene los datos que te envía el cliente
// y también responde con información

// Librerías
import express from "express";

// Manejador de base de datos (servicio)
import ClienteService from "../services/cliente.service.mjs";

const router = express.Router();

// req: recibe datos del cliente
// res: responde al cliente
// next: maneja errores

function obtenerRegistros(req, res, next) {
  ClienteService.obtenerRegistros()
    .then((registros) => res.json(registros))
    .catch((err) => next(err));
}

function crearRegistros(req, res, next) {
  const { nombre } = req.body;

  ClienteService.crearRegistro(nombre)
    .then(() => {
      res.status(201).json({ mensaje: "Producto registrado correctamente." });
    })
    .catch((err) => next(err));
}

function editarRegistros(req, res, next) {
  const { id, nombre } = req.body;

  ClienteService.editarRegistro(id, nombre)
    .then(() => {
      res.status(200).json({ mensaje: "Producto editado correctamente." });
    })
    .catch((err) => next(err));
}

function eliminarRegistros(req, res, next) {
  const { id } = req.params;

  ClienteService.eliminarRegistro(id)
    .then(() => {
      res.status(200).json({ mensaje: "Producto eliminado correctamente." });
    })
    .catch((err) => next(err));
}

// Rutas
router.get("/", obtenerRegistros);
router.post("/", crearRegistros);
router.put("/", editarRegistros);
router.delete("/:id", eliminarRegistros);

export default router;
