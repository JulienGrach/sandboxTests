const rewire = require("rewire")
const _4 = rewire("./4.constructor")
const CarFonction = _4.__get__("CarFonction")
const newImplementation = _4.__get__("newImplementation")
// @ponicode
describe("CarFonction", () => {
    test("0", () => {
        let result = CarFonction()
        expect(result).toBe(undefined)
    })
})

// @ponicode
describe("newImplementation", () => {
    test("0", () => {
        newImplementation("")
    })

    test("1", () => {
        newImplementation("callback detected, not supported yet")
    })
})
