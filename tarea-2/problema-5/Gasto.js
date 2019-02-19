export default class Gasto{
    constructor (nombreTienda, horaCompra , fechaCompra, cantidadEnPesos)
   
{  this._nombreTienda = nombreTienda.toUpperCase();
    this._horaCompra = horaCompra;
    this._fechaCompra = fechaCompra;
    this._cantidaEnPesos = cantidadEnPesos;
}



imprimir(){
    console.log(`${this._nombreTienda}, hora ${this._horaCompra},${this._fechaCompra}, $${this._cantidaEnPesos}Mxn`);
    
}

}