export default class Consulta{
    constructor (nombre, hora, telefono, fechaCita, diasCita)
   
{  this._nombre = nombre.toUpperCase();
    this._hora = hora;
    this._telefono = telefono;
    this._fechaCita = fechaCita
    this._diasCita = Math.round(((this._getStringAsDate(diasCita)-(new Date)) / (86400000)));
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
    console.log(`${this._nombre}, hora ${this._hora}, ${this._telefono},${this._fechaCita}, ${this._diasCita} dias para la cita`);
    
}

}