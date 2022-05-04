//El usuario ingresa un DNI. Comprobar que sea válido, es decir, que tenga 7 u 8 dígitos
// y que no sea todos ceros

let dni = [];
let digits = prompt("Ingrese su DNI");
if (digits.trim() == "" || isNaN(digits)) {
  alert("Ingrese solo numeros");
} else {
  dni.push(digits);
  dni.toString(digits);
  if (digits.length != 7 && digits.length != 8) {
    alert("Cantidad de digitos incorrecto");
  } else {
    if (dni == 0000000 || dni == 00000000) {
      alert("DNI invalido");
    } else {
      console.log("Numero de DNI ingresado: ", dni);
    }
  }
}
