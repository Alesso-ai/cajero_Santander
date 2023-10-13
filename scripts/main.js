document.addEventListener("DOMContentLoaded", function () {
  const mensaje = document.getElementById("mensaje");
  const saldo = document.getElementById("saldo");
  const importe = document.getElementById("importe");
  const retirar = document.getElementById("retirar");
  const depositar = document.getElementById("depositar");

  retirar.addEventListener("click", function () {
    const cantidad = parseFloat(importe.value);
    if (isNaN(cantidad) || cantidad <= 0 || cantidad > saldo) {
      mensaje.textContent = "Importe no valido";
    } else {
      saldo = saldo - cantidad;
      saldo();
      mensaje.textContent ="retirado: ${cantidad}"; 
    }
    







  });
});
