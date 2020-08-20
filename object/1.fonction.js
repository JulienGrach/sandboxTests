function lambda(){}

console.log(`is lambda an object ? ${lambda instanceof Object}`)
lambda.myProperty = 3
console.log(Object.getOwnPropertyDescriptors(lambda))