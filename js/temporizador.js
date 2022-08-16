window.onload = function () {
    let minutos = prompt("Ingrese los minutos");
    let segundos = prompt("ingrese los segundos");
    setInterval(function () {
       document.getElementById("reloj").innerHTML =
          minutos + " : " + segundos;
       segundos--;
       if (segundos == 00) {
          minutos--;
          segundos = 59;
          if (minutos,segundos == 0) {
            minutos = 0;
            segundos = 0
           alert("El tiempo se ha terminado");
          }
       }
    }, 1000);
 };

 