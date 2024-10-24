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

// let entrada = prompt("Ingresar un nombre");

// while(entrada != "ESC" ){
// switch (entrada) {
//     case "ANA":
//         alert("HOLA ANA");
//         break;

//     case "JUAN":
//         alert("HOLA JUAN");
//         break;
//     default:
//         alert("¿QUIÉN SOS?")
//         break;
//     }
// entrada = prompt("Ingresar un nombre");
// }

//                              Ejemplo Aplicado: Calculadora

// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//     case "+":
//     return primerNumero + segundoNumero;
//     break;
//     case "-":
//     return primerNumero - segundoNumero;
//     break;
//     case "*":
//     return primerNumero * segundoNumero;
//     break;
//     case "/":
//     return primerNumero / segundoNumero;
//     break;
//     default:
//     return 0;
//     break;
//     }
//     }
//     console.log(calculadora(10, 5, "*"));

    


//                                       7-8 Json  Ejemplo: Almacenar Array de Objetos

// const productos = [{ id: 1, producto: "Arroz", precio: 125 },
//                    { id: 2, producto: "Fideo", precio: 70 },
//                    { id: 3, producto: "Pan" , precio: 50},
//                    { id: 4, producto: "Flan" , precio: 100}];
    
//     const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    
//     //                                   Almacenar producto por producto
//     for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
//     }
//     //                                  o almacenar array completo
//     guardarLocal("listaProductos", JSON.stringify(productos));



//                              Almacenamos Array de Objetos y obtuvimos Array Almacenado

// const array = [
//     {id:1, producto: 'tabla', precio: 1000},
//     {id:2, producto: 'trucks', precio: 5000},
//     {id:3, producto: 'ruedas', precio: 3000}
// ]

// class Producto{
//     constructor(objeto){
//         this.id = parseInt(objeto.id)
//         this.nombre = objeto.producto
//         this.precio = parseFloat(objeto.precio)
//     }

//     sumarIva(){
//         this.precio = this.precio * 1.21
//     }
// }

// localStorage.setItem('listaDeProductos', JSON.stringify(array))

// const arrayTraido = localStorage.getItem('listaDeProductos')

// const objArrayTraido = JSON.parse(arrayTraido)

// const arrayFinal = []

// for(const objet of objArrayTraido){
//     arrayFinal.push(new Producto(objet))
// }

// arrayFinal[1].sumarIva()

// console.log(arrayFinal)