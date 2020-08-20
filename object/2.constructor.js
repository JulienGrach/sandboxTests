const car = {
    wheels: 4,
    motor: true
}

function Small() {
    this.doors = 2
}

const smallCar = new Small()
console.log(`is smallCar coming from Small before ? ${smallCar instanceof Small}`) 

Small.prototype = car;
console.log(`is smallCar coming from Small after ? ${smallCar instanceof Small}`)
