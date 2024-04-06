class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.impuesto = {};
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }

  get impuesto() {
    return this._impuesto;
  }
  set impuesto(nuevo_impuesto) {
    this._impuesto = nuevo_impuesto;
  }

  calcularImpuesto() {
    return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
  }
}

export default Cliente;
