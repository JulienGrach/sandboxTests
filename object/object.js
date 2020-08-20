// const car = {
//     wheels: 4,
//     motor: true
// }

// function Small() {
//     this.doors = 2
// }

// function Big() {
//     this.doors = 4
// }

// Small.prototype = car
// Big.prototype = car

// const smallCar = new Small()

// console.log(`is smallCar coming from Small ? ${smallCar instanceof Small}`) 
// console.log(`is smallCar coming from Big ? ${smallCar instanceof Big}`)




// // function myConstructor() {
// //     this.a = 1
// //     this.c = 2
// //     this.callback = (a) => a + 2
// // };

// // const a = new myConstructor();
// // console.log(
// //     `is myConstructor equal to a.constructor ${a.constructor === myConstructor}`
// // )// true

// // myConstructor.prototype = {
// //     b: 3,
// //     c: 4
// // };

// // console.log(
// //     `is myConstructor equal to a.constructor ${a.constructor === myConstructor}`
// // )// false

// // const b = new myConstructor();
// // console.log(
// //     `is myConstructor equal to b.constructor ${b.constructor === myConstructor}`
// // )// false

// // // because .constructor send a ref to the prototype.constructor
// // // now prototype is an object create from native Object constructor
// // // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/constructor

// // console.log(
// //     `is a instanceof myConstructor ${a instanceof myConstructor}`
// // )// false
// // console.log(
// //     `is b instanceof myConstructor ${b instanceof myConstructor}`
// // )// true

// // // because isInstanceOf check recursively all chain of b with the constructor.prototype
// // // b.__proto__ === myContructor.prototype
// // // a.__proto__ was equal befort myConstructor.prototype reassignment
// // // https://www.ecma-international.org/ecma-262/6.0/#sec-instanceofoperator
// // // https://www.ecma-international.org/ecma-262/6.0/#sec-ordinaryhasinstance:

// // console.log(
// //     `is myConstructor.prototype equal to b.__proto__ ${myConstructor.prototype === Object.getPrototypeOf(b)}`
// // )// true

// // // Give the function implementation
// // console.log(Object.getOwnPropertyDescriptors(a).callback.value.toString())

// // // How it works with native code ?
// // const e = new Error("hello")
// // const { toString } = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(e))
// // console.log(Object.toString.call(toString.value))

// // // Quand je croise un objet, je dois remonter toute sa chaîne de prototype
// // // L'identité d'un objet est défini par "getOwnPropertyDescriptors"
// // // Une fonction est un objet
// // // L'héritage est défini par la comparaison des prototypes
// // // Cette comparaison est basé sur le pointeur, inaccessible

// // const o = {
// //     b: 3
// // }

// // o.a = o

// // console.log(typeof o.a)

// // console.log({} === null)

// // console.log(e.__proto__ === Error.prototype)

// // const desc = Object.getOwnPropertyDescriptors(console)
// // const sym = Object.getOwnPropertySymbols(console)

// // console.log(desc[sym[0]])

// // const arr = [1, 2, 4, 5]
// // Object.keys(arr).forEach(k => {
// //     console.log(arr[k])
// // })