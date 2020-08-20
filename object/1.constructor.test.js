const rewire = require("rewire")
const _1 = rewire("./1.constructor")
const Small = _1.__get__("Small")
const Big = _1.__get__("Big")
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
