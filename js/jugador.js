// Objeto literal con las propiedades del jugador incluyendo sus responsabilidades

var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  moverse: function (desplazamientoX,desplazamientoY) {
    this.x = this.x + desplazamientoX;
    this.y = this.y + desplazamientoY;
  },
  perderVidas: function (cantVidas) {
    this.vidas = this.vidas - cantVidas;
  }
}
