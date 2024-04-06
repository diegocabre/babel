"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
//creamos el cliente
var clienteUno = new _cliente["default"]("Diego");
//creamos el impuesto
var impuestoUno = new _impuestos["default"](1000, 200);

//asignamos los valores al cliente
clienteUno.impuesto = impuestoUno;
console.log(clienteUno.nombre, clienteUno.calcularImpuesto());
