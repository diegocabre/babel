class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  set montoBrutoAnual(nuevo_monto) {
    this._montoBrutoAnual = nuevo_monto;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nueva_deduccion) {
    this._deducciones = nueva_deduccion;
  }
}

export default Impuesto;
