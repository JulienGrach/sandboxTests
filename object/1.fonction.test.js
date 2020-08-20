const rewire = require("rewire")
const _1 = rewire("./1.fonction")
const lambda = _1.__get__("lambda")
// @ponicode
describe("lambda", () => {
    test("0", () => {
        let result = lambda()
        expect(result).toBe(undefined)
    })
})
