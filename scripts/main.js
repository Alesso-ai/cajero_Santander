document.addEventListener("DOMContentLoaded", function () {
  7
  /*1º Cargar un saldo incial */
  const saldoInicial = 1000;
  /*2º Igualamos el saldo inicial a saldo actual en un let 
  para actualizar datos en pantalla*/
  let saldoActual = saldoInicial;

  /*3º Creamos variables para enlazar con el html */
  const mensaje = document.getElementById("mensaje");
  const saldo = document.getElementById("saldo");
  const importe = document.getElementById("importe");
  const retirar = document.getElementById("retirar");
  const depositar = document.getElementById("depositar");
  
  /*4º Creamos la accion del boton de retirar */

  retirar.addEventListener("click", function () {

    /*5º Creamos una variable local que sea la cantidad que meta el usuario
    pasandolo de string a numero y recogiendo el valor */
    const cantidad = parseFloat(importe.value);

    /*6º Si no es un numero no avanza, o si la cantidad del usuario es menor o igual a 0 
    o si la cantidad es mayor al saldo actual  */ 
    if(isNaN(cantidad) || cantidad <= 0 ||cantidad > saldoActual ){

      /*7º Mensaje por si no cumple una condicion de arriba *OR*
      la diferencia entre textcontent e innertext que te saca literalmente lo que escribas
       */
      mensaje.textContent = "Importe no valido";
      // mensaje.innerText = ´${cantidad} no es valido´

    }else{
      saldoActual = saldoActual-cantidad;
       actualziarSaldoConvecional()
       mensaje.textContent=`Retirado: ${cantidad}`;
      
    
    }

      /*8º Metodo para actualizar saldo que lo uso para 
      no estar repitiendo la misma movida 200 veces*/
     function actualziarSaldoConvecional(){
      saldo.textContent = `Saldo: ${saldoActual}€`
    }

    
  });

  depositar.addEventListener("click", function() {
    const cantidad = parseFloat(importe.value);

    if(isNaN(cantidad) || cantidad <= 0){

      mensaje.textContent="Importe no valido";

    }else{

      saldoActual = cantidad + saldoActual;
      actualziarSaldoConvecional();
      mensaje.textContent=`Depositado: ${cantidad}`;
    }

    function actualziarSaldoConvecional(){
      saldo.textContent = `Saldo: ${saldoActual}€`
    }



  });













});
