var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov/*, parametro/s extra de ZombieConductor*/, direccion) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

/* Creacion del ZombieConductor */

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

// Metodos para el movimiento

ZombieConductor.prototype.mover = function () {

  if (this.direccion==="h") {
    this.x += this.velocidad;
  }
  else if (this.direccion==="v") {
  this.y += this.velocidad;
  }

    /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.x = 0;
  }
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.y = 0;
  }
}

//Metodo para el ataque
ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(5);
}
