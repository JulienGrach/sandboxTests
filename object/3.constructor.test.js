const rewire = require("rewire")
const _3 = rewire("./3.constructor")
const child = _3.__get__("child")
// @ponicode
describe("child", () => {
    test("0", () => {
        let result = child()
        expect(result).toBe(undefined)
    })
})
