export default class Empleado{
    constructor (nombre, puesto, telefono, edad, id, antiguedad)
   
{  this._nombre = nombre.toUpperCase();
    this._puesto = puesto.toUpperCase();
    this._telefono = telefono;
    this._edad = Math.round((((new Date) - this._getStringAsDate(edad)) / (31556900000)));
    this._id = id;
    this._antiguedad = Math.round((((new Date) - this._getStringAsDate(antiguedad)) / (31556900000)));
}

//obtener cadena como fecha//
_getStringAsDate(nFecha){
    let partes = nFecha.split("/");
    let dFecha = new Date(partes[2], partes[1]-1, partes[0]);
    return dFecha;
}

//obtener diferencia//
_getDifference(fechaA, fechaB){
    let year = 31556900000;
    let fechaB = new Date;
    let differenceYear = fechaB - fechaA;
    return Math.round(differenceYear/year);
}

_getAntiguedad(){
    return this._getDifference(new Date - dFecha);

}



imprimir(){
    console.log(`${this._nombre}, ${this._puesto}, ${this._telefono},${this._edad} anios, su ID es ${this._id},  ${this._antiguedad} anios de antiguedad`);
    
}

}