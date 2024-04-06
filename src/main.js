import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

//creamos el cliente
const clienteUno = new Cliente("Diego");
//creamos el impuesto
const impuestoUno = new Impuesto(1000, 200);

//asignamos los valores al cliente
clienteUno.impuesto = impuestoUno;

console.log(clienteUno.nombre, clienteUno.calcularImpuesto());
