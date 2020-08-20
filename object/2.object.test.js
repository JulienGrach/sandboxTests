const rewire = require("rewire")
const _2 = rewire("./2.object")
const randomGender = _2.__get__("randomGender")
// @ponicode
describe("randomGender", () => {
    test("0", () => {
        let result = randomGender()
        expect(result).toBe("f")
    })
})
