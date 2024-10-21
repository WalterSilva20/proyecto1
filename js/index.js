//                              Variables

// let nombre = 'walter';
// let apellido = 'silva';
// let edad = '37';

// console.log (nombre);
// console.log (apellido);
// console.log (edad);


//                               Ecuaciones
                                        
// let numeroA = 2;
// let numeroB = 3;
// let numeroC = 4;
// const numero3 = 5;

// let resutladoSuma = numeroA + numeroB;
// let resultadoResta = numeroA - numeroB; 
// let resultadoProducto = numeroA * numeroC;

// console.log (resutladoSuma);
// console.log (resultadoResta);
// console.log (resultadoProducto);


//                                 Condicionales

// let unNumero = 7;

// if (unNumero == 5){
//     console.log ("Hola Bro");
// }else if (unNumero == 6){
//     console.log ("Bye Bro");

// }else {
//     console.log ('Bye Bro');
// }

// let nombreUsuario = prompt("ingresar nombre de usuario");

// if (nombreUsuario == ""){
//     alert("No ingresaste nombre de usuario");
// }else {
//     alert("Nombre de usuario:" + " " + nombreUsuario);
// }

// let precio = parseInt(prompt("Ingresa un Precio"));

// if (precio < 20){
//     alert("Precio menor que 20");
// }else if (precio <40){
//     alert("Precio menor que 40");
// }else if (precio <60){
//     alert("Precio menor que 60");
// }else if (precio >100){
//     alert("Precio mayor que 100");
// }


//                               Tipos de Bucles: Estructura For 

// for (let i = 0; i< 10; i++) {
//     alert (i);
// }

//                               ahora cuenta de 1 a 10

// for (let i = 1; i<=10; i++){
//     alert (i)
// }
//                               Algoritmo para calcular la tabla del multiplicar de un número


// let ingresarNumero = parseInt(prompt("Ingresar Número"));
// for (let i = 1; i <=10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert(ingresarNumero + "x"+ i +" = "+ resultado);
// }


//                               Algoritmo de Turnos

// for (let i = 1; i <=5; i++) {
//     let ingresarNombre = prompt("Ingresar Nombre");
//     if(ingresarNombre == ""){
//         alert("Ingresa tu maldito nombre")
//         let ingresarNombre = prompt("Ingresar Nombre")
//     }else{
//         alert("Turno N°" + i + " Nombre: " + ingresarNombre);
//     }
// }

//                              Algoritmo de Break

// for (let i = 1; i <= 10; i++){
//     if(i == 5){
//         break;
//     }
//     alert(i);
// }

//                              Sentencia Continue
// for (let i = 1; i <= 10; i++){
//     if(i == 5){
//         continue;
//     }
//     alert(i);
// }


 //                              While: No recomendable usar

// let repetir = true;
// while(repetir){
// console.log("Al infinito y...¡Más allá!");
// }


//                              Ejemplo de While: Esc

// let entrada = prompt("Ingresar un dato");
// while(entrada != "ESC" ){
//     alert("El usuario ingresó "+ entrada);
//     entrada = prompt("Ingresar otro dato");
// }

//                              Do...While

// let repetir = false;
// do{
//     console.log("¡Sólo una vez!");
// }while(repetir)
//                              Do...While: N°
// let numero = 0;
// do{
//     numero = prompt("Ingresar Número");
// console.log(numero);
// }while(parseInt(numero));


//                              Práctica con While y Switch

let entrada = prompt("Ingresar un nombre");

while(entrada){
    switch (entrada != NaN) {
        case "":
        alert("HOLA " + entrada);
  
    break;
        default:
        alert("¿Esto no es un Nombre?")
    break;
}
    entrada = prompt("Ingresar un nombre");
}