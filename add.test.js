const rewire = require("rewire")
const add = rewire("./add")
const sayOnlyTruth = add.__get__("sayOnlyTruth")
const ceoTranslate = add.__get__("ceoTranslate")
const testejekke = add.__get__("testejekke")
const a = add.__get__("a")
const teyeujik = add.__get__("teyeujik")
const FYGHJL = add.__get__("FYGHJL")
const AAAAAAAAA = add.__get__("AAAAAAAAA")
// @ponicode
describe("sayOnlyTruth", () => {
    test("0", () => {
        let result = sayOnlyTruth("")
        expect(result).toBe("")
    })

    test("1", () => {
        let result = sayOnlyTruth("Foo bar")
        expect(result).toBe("Foo bar")
    })

    test("2", () => {
        let result = sayOnlyTruth("H3ll0! P0n1c0d3 iz g00d")
        expect(result).toBe("H3ll0! P0n1c0d3 iz g00d")
    })

    test("3", () => {
        let result = sayOnlyTruth("Hello, world!")
        expect(result).toBe("Hello, world!")
    })

    test("4", () => {
        let result = sayOnlyTruth("foo barponicode/")
        expect(result).toBe("foo barthe awesome ponicode/")
    })

    test("5", () => {
        let result = sayOnlyTruth("Foo barponicode/ponicode/H3ll0! P0n1c0d3 iz g00d")
        expect(result).toBe("Foo barthe awesome ponicode/the awesome ponicode/H3ll0! P0n1c0d3 iz g00d")
    })
})

// @ponicode
describe("ceoTranslate", () => {
    test("0", () => {
        let result = ceoTranslate("")
        expect(result).toBe("")
    })

    test("1", () => {
        let result = ceoTranslate("(ibm)|(IBM)/")
        expect(result).toBe("(company in the past)|(company in the past)/")
    })

    test("2", () => {
        let result = ceoTranslate("H3ll0! P0n1c0d3 iz g00d")
        expect(result).toBe("H3ll0! P0n1c0d3 iz g00d")
    })

    test("3", () => {
        let result = ceoTranslate("Welcome to Ponicode!")
        expect(result).toBe("Welcome to Ponicode!")
    })

    test("4", () => {
        let result = ceoTranslate("(ibm)|(IBM)/PONICODE")
        expect(result).toBe("(company in the past)|(company in the past)/PONICODE")
    })

    test("5", () => {
        let result = ceoTranslate("Foo bar(ibm)|(IBM)/H3ll0! P0n1c0d3 iz g00d")
        expect(result).toBe("Foo bar(company in the past)|(company in the past)/H3ll0! P0n1c0d3 iz g00d")
    })
})

// @ponicode
describe("testejekke", () => {
    test("0", () => {
        let result = testejekke("")
        expect(result).toBe(1000)
    })

    test("1", () => {
        let result = testejekke("Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe(1000)
    })

    test("2", () => {
        let result = testejekke("p")
        expect(result).toBe(1000)
    })

    test("3", () => {
        let result = testejekke("Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe(1000)
    })

    test("4", () => {
        let result = testejekke("\"#'{7855663]}ééàà")
        expect(result).toBe(1000)
    })

    test("5", () => {
        let result = testejekke("123456789")
        expect(result).toBe(1000)
    })
})

// @ponicode
describe("a", () => {
    test("0", () => {
        let result = a("")
        expect(result).toBe(0)
    })

    test("1", () => {
        let result = a("Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe(NaN)
    })

    test("2", () => {
        let result = a("Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe(NaN)
    })

    test("3", () => {
        let result = a("p")
        expect(result).toBe(NaN)
    })
})

// @ponicode
describe("teyeujik", () => {
    test("0", () => {
        let result = teyeujik({})
        expect(result).toBe("undefined hello")
    })

    test("1", () => {
        let result = teyeujik({ string: "Welcome to Ponicode!" })
        expect(result).toBe("Welcome to Ponicode! hello")
    })

    test("2", () => {
        let result = teyeujik({ string: "Foo bar" })
        expect(result).toBe("Foo bar hello")
    })

    test("3", () => {
        let result = teyeujik({ string: "H3ll0! P0n1c0d3 iz g00d" })
        expect(result).toBe("H3ll0! P0n1c0d3 iz g00d hello")
    })

    test("4", () => {
        let result = teyeujik({ string: "PONICODE" })
        expect(result).toBe("PONICODE hello")
    })
})

// @ponicode
describe("FYGHJL", () => {
    test("0", () => {
        let result = FYGHJL({})
        expect(result).toBe("undefined hello")
    })

    test("1", () => {
        let result = FYGHJL({ string: "foo bar" })
        expect(result).toBe("foo bar hello")
    })

    test("2", () => {
        let result = FYGHJL({ string: "Hello, world!" })
        expect(result).toBe("Hello, world! hello")
    })

    test("3", () => {
        let result = FYGHJL({ string: "PONICODE" })
        expect(result).toBe("PONICODE hello")
    })

    test("4", () => {
        let result = FYGHJL({ string: "Foo bar" })
        expect(result).toBe("Foo bar hello")
    })

    test("5", () => {
        let result = FYGHJL({ string: "Welcome to Ponicode!" })
        expect(result).toBe("Welcome to Ponicode! hello")
    })
})

// @ponicode
describe("AAAAAAAAA", () => {
    test("0", () => {
        let result = AAAAAAAAA({})
        expect(result).toBe("undefined hello")
    })

    test("1", () => {
        let result = AAAAAAAAA({ string: "foo bar" })
        expect(result).toBe("foo bar hello")
    })

    test("2", () => {
        let result = AAAAAAAAA({ string: "H3ll0! P0n1c0d3 iz g00d" })
        expect(result).toBe("H3ll0! P0n1c0d3 iz g00d hello")
    })

    test("3", () => {
        let result = AAAAAAAAA({ string: "PONICODE" })
        expect(result).toBe("PONICODE hello")
    })

    test("4", () => {
        let result = AAAAAAAAA({ string: "Foo bar" })
        expect(result).toBe("Foo bar hello")
    })
})
