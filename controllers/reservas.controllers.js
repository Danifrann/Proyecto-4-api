const express = require('express');
const router = express.Router();
const reservas = require('../models/reservas.model');

// Crear reserva
router.post('/reservas', (req, res) => {
  const reserva =reservas.crear(req.body.fecha, req.body.hotel, req.body.tipoHabitacion, req.body.cantidadHuespedes, req.body.estado);
  res.json(reserva);
});

// Obtener la lista de reservas
router.get('/reservas', (req, res) => {
  const hotel = req.query.hotel; 
  const estado = req.query.estado;
  const cantidadHuespedes = req.query.cantidadHuespedes;
  const tipoHabitacion = req.query.tipoHabitacion;
  res.json(reservas.obtenerReservas(hotel, estado, cantidadHuespedes, tipoHabitacion));
});

// Obtener información de una reserva específica
router.get('/reservas/:id', (req, res) => {
  res.json(reservas.obternerPorId(req.params.id));
});

// Actualizar información de una reserva	
router.put('/reservas/:id', (req, res) => {
  res.json(reservas.actualizar(req.params.id, req.body.fecha, req.body.hotel, req.body.tipoHabitacion, req.body.cantidadHuespedes, req.body.estado));
});

// Eliminar una reserva específica
router.delete('/reservas/:id', (req, res) => {
  res.json(reservas.eliminar(req.params.id));
});



module.exports = router;