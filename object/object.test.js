const rewire = require("rewire")
const object = rewire("./object")
const Small = object.__get__("Small")
const Big = object.__get__("Big")
// @ponicode
describe("Small", () => {
    test("0", () => {
        let result = Small()
        expect(result).toBe(undefined)
    })
})

// @ponicode
describe("Big", () => {
    test("0", () => {
        let result = Big()
        expect(result).toBe(undefined)
    })
})
