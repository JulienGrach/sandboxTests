// function CarFonction() {
//     this.wheels = 4
// }

// function newImplementation(fn) {
//     // create an empty prototype object
//     const proto = fn.prototype ? fn.prototype : fn.prototype = {}
//     Object.defineProperty(proto, 'constructor', { value: fn, enumerable: false })

//     // create a new this object from the function prototype
//     const newObject = Object.create(proto)
//     fn.apply(newObject)

//     // return this
//     return newObject
// }

// const carWithConstructor = new CarFonction()
// const carWithoutConstructor = newImplementation(CarFonction)
// console.log(`Same Instance ${carWithoutConstructor instanceof CarFonction && carWithConstructor instanceof CarFonction}`)
// console.log(`Same Constructor: ${carWithConstructor.constructor === carWithoutConstructor.constructor}`)
