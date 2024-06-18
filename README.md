Proyecto 4: API Node.js
=======================

Este proyecto es una aplicación web que permite al usuario crear reservas de hoteles

## Requisitos

* Node.js
* Express

## Rutas
api/reservas
* POST: Crear una reserva
* GET: Obtener la lista de reservas (puede ser filtrada por hotel, estado, cantidadHuespedes y tipoHabitacion)
* GET: Obtener información de una reserva    
* PUT: Actualizar información de una reserva
* DELETE: Eliminar una reserva

## Ejemplo de datos
'{"fecha":"2020-01-01", "hotel":"Hotel 1", "tipoHabitacion":"Casa", "cantidadHuespedes":1, "estado":"Confirmado"}' http://localhost:3000/api/reservas
