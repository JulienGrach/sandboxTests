const rewire = require("rewire")
const _3 = rewire("./3.object")
const callByReference = _3.__get__("callByReference")
// @ponicode
describe("callByReference", () => {
    test("0", () => {
        let result = callByReference({})
        expect(result).toBe(undefined)
    })

    test("1", () => {
        let result = callByReference({ a: "p" })
        expect(result).toBe(undefined)
    })

    test("2", () => {
        let result = callByReference({ a: "Thank you for using PONICODE! Get to 80% coverage super fast !" })
        expect(result).toBe(undefined)
    })

    test("3", () => {
        let result = callByReference({ a: "123456789" })
        expect(result).toBe(undefined)
    })

    test("4", () => {
        let result = callByReference({ a: "Ponicponicodeponiponicoooooooooode18774563" })
        expect(result).toBe(undefined)
    })
})
