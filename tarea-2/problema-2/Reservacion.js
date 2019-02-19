export default class Reservacion{
    constructor(nombre, hora, dia, numeroPersonas, telefono, diasParaLlegada)

   {this._nombre = nombre;
    this._hora = hora;
    this._dia = dia;
    this._numeroPersonas = numeroPersonas;
    this._telefono = telefono;
    this._diasParaLlegada = Math.round(((this._getStringAsDate(diasParaLlegada))- (new Date))/ (86400000));

}

//obtener cadena como fecha//
_getStringAsDate(nFecha){
    let partes = nFecha.split("/");
    let dFecha = new Date(partes[2], partes[1]-1, partes[0]);
    return dFecha;
}

//obtener diferencia//
_getDifference(fechaA, fechaB){
    let dias = 1000*60*60*24;
    let fechaB = new Date;
    let differenceYear = fechaB - fechaA;
    return Math.round(differenceYear/dias);
}

imprimir(){
    console.log(`${this._nombre}, ${this._hora}, ${this._dia}, ${this._numeroPersonas} personas, ${this._telefono},${this._diasParaLlegada} dias para llegada`);
    
}
}