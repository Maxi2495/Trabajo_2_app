// Crear una aplicación backend simple usando VSCode, NodeJs y NPM.
// Crear una aplicación adivina_numero_secreto que contenga el código del juego:
 //● Genera un númeroaleatorio entre 1 y 100 para que el usuario lo adivine.
 //● Pidealusuario que ingrese un número y compáralo con el número generado.
 //● Proporciona retroalimentación al usuario si el número es demasiado alto o demasiado bajo.
 //● Continúasolicitando números al usuario hasta que adivine el número correcto.
 //● Muestraunmensajedefelicitaciones cuando el usuario adivina el número.

 const readlineSync = require('readline-sync');

//Libreria para crear valores aleatorios
 const Chance = require('chance');
 //Instancia de chance
 const chance = Chance();
 const adivina_numero_secreto = () => {
  console.log("'ADIVINA EL NUMERO SECRETO")
    //Creacion del numero aleatorio
  console.log("A continuacion de manera aleatoria se generará un número aleatorio de 1 a 100");
  var numero_aleatorio = chance.d100();
  console.log('"Numero secreto"')
  //console.log(numero_aleatorio);

  console.log('Ingrese un número hasta adivinar cual es el número secreto!')

  while (numero_aleatorio != pideAlUsuario){

   var pideAlUsuario = readlineSync.question("Ingresar aqui: ");

   if(numero_aleatorio > pideAlUsuario){
   console.log("El numero es demasiado bajo ")}
     
   else if(numero_aleatorio < pideAlUsuario){
    console.log("El numero es demasiado alto ")}

   else if(numero_aleatorio == pideAlUsuario){
    console.log("El numero es correcto! felicitaciones")}
   }
  }

 adivina_numero_secreto();