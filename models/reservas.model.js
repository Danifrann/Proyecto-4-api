
class Reserva {
  constructor(id, fecha, hotel, tipoHabitacion, cantidadHuespedes, estado) {
    this.id = id;
    this.fecha = fecha;
    this.hotel = hotel;
    this.tipoHabitacion = tipoHabitacion;
    this.cantidadHuespedes = cantidadHuespedes;
    this.estado = estado;
  }
}

class AgendaReservas {
  constructor() {
      this.reservas = [];
      this.currentId = 1;
  }

  crear(fecha, hotel, tipoHabitacion, cantidadHuespedes, estado) {
    const nuevaReserva = new Reserva(this.currentId++, fecha, hotel, tipoHabitacion, cantidadHuespedes, estado);
    this.reservas.push(nuevaReserva);
    return nuevaReserva;
  }

  obtenerReservas(hotel, estado, cantidadHuespedes, tipoHabitacion) {
    console.log("hotel: "+ hotel);
    console.log("estado: "+ estado);
    console.log("cantidadHuespedes: "+ cantidadHuespedes);
    console.log("tipoHabitacion: "+ tipoHabitacion);
    const filtradas = this.reservas.filter(reserva => {
      return (!hotel || reserva.hotel === hotel) && (!estado || reserva.estado === estado) && (!cantidadHuespedes || reserva.cantidadHuespedes == cantidadHuespedes) && (!tipoHabitacion || reserva.tipoHabitacion == tipoHabitacion);
    });
    return filtradas;
  }

  obternerPorId(id) {
    const reserva = this.reservas.find(reserva => reserva.id === parseInt(id));
    return reserva;
  }

  actualizar(id, fecha, hotel, tipoHabitacion, cantidadHuespedes, estado) {
    const reservaIndex = this.reservas.findIndex(item => item.id ===  parseInt(id));
    if (reservaIndex !== -1) {
      this.reservas[reservaIndex].fecha = fecha;
      this.reservas[reservaIndex].hotel = hotel;
      this.reservas[reservaIndex].tipoHabitacion = tipoHabitacion;
      this.reservas[reservaIndex].cantidadHuespedes = cantidadHuespedes;  
      this.reservas[reservaIndex].estado = estado;
      return this.reservas[reservaIndex];
    } else {
      return "Reserva no encontrada";
    }
      
  }

  eliminar(id) {
    const reservaIndex = this.reservas.findIndex(reserva => reserva.id === parseInt(id));
      if (reservaIndex !== -1) {
        this.reservas.splice(reservaIndex, 1)[0];
        return "Reserva eliminada";
      }
    return "Reserva no encontrada";
  }
}

module.exports = new AgendaReservas();