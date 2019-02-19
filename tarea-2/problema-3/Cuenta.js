export default class Cuenta{
    constructor (nombre, cuenta, telefono, diasCorte)
   
{  this._nombre = nombre.toUpperCase();
    this._cuenta = cuenta;
    this._telefono = telefono;
    this._diasCorte = Math.round(((this._getStringAsDate(diasCorte)-(new Date)) / (86400000)));
}

//obtener cadena como fecha//
_getStringAsDate(nFecha){
    let partes = nFecha.split("/");
    let dFecha = new Date(partes[2], partes[1]-1, partes[0]);
    return dFecha;
}

//obtener diferencia//
_getDifference(fechaA, fechaB){
    let year = 86400000;
    let fechaB = new Date;
    let differenceYear = fechaB - fechaA;
    return Math.round(differenceYear/year);
}

_getAntiguedad(){
    return this._getDifference(new Date - dFecha);

}



imprimir(){
    console.log(`${this._nombre}, Num. de C. ${this._cuenta}, ${this._telefono},${this._diasCorte} para corte`);
    
}

}