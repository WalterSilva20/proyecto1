// let nombre = prompt('Ingresa su nombre')
// let apellido = prompt('Ingresa su apellido')
// let edad = parseInt( prompt('Ingresa su edad'))


// localStorage.setItem('nombre', nombre)
// localStorage.setItem('apellido', apellido)
// localStorage.setItem('edad', edad)

// let nombreTraido = localStorage.getItem('nombre')
// let apellidoTraido = localStorage.getItem('apellido')
// let edadTraida = localStorage.getItem('edad')

// alert(`Su nombre es: ${nombreTraido}`)
// alert(`Su apellido es: ${apellidoTraido}`)
// alert(`Su edad es: ${edadTraida}`)




const guardarEnLocalStorage = (clave, valor) => localStorage.setItem(clave, valor)
const traerDeLocalStorage = (clave) => localStorage.getItem(clave)

let producto1 = {id: 1, prod: 'Botines F11' , precio: 100000}
let producto2 = {id: 2, prod: 'Botines F5' , precio: 80000}

class Producto{

    constructor(id, nombre, precio){
        this.id = id
        this.prod = nombre
        this.precio = precio
        this.vendido = false
    }

    vender(){
        this.vendido = true
    }

}

let producto3 = new Producto(3, 'Pelota F5', 90000)
let producto4 = new Producto(4, 'Pelota F11', 110000)

producto3.vender()

// console.log(producto1)
// console.log(producto2)
// console.log(producto3)
// console.log(producto4)

const array = [producto1, producto2, producto3, producto4]

const arrayEnJson = JSON.stringify(array)

console.log(arrayEnJson)
// console.log(array)

guardarEnLocalStorage('Producto', arrayEnJson)

const arrayParceado = JSON.parse(traerDeLocalStorage('Producto'))

console.log(arrayParceado)