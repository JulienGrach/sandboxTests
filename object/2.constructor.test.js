const rewire = require("rewire")
const _2 = rewire("./2.constructor")
const Small = _2.__get__("Small")
// @ponicode
describe("Small", () => {
    test("0", () => {
        let result = Small()
        expect(result).toBe(undefined)
    })
})
