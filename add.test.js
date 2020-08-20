const rewire = require("rewire")
const add = rewire("./add")
const sayOnlyTruth = add.__get__("sayOnlyTruth")
const ceoTranslate = add.__get__("ceoTranslate")
const subsets = add.__get__("subsets")
const testejekke = add.__get__("testejekke")
const subsetsII = add.__get__("subsetsII")
const subsetsIII = add.__get__("subsetsIII")
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
        let result = sayOnlyTruth("ponicode/")
        expect(result).toBe("the awesome ponicode/")
    })

    test("2", () => {
        let result = sayOnlyTruth("Hello, world!ponicode/Hello, world!")
        expect(result).toBe("Hello, world!the awesome ponicode/Hello, world!")
    })

    test("3", () => {
        let result = sayOnlyTruth("Hello, world!ponicode/")
        expect(result).toBe("Hello, world!the awesome ponicode/")
    })

    test("4", () => {
        let result = sayOnlyTruth("PONICODEponicode/ponicode/Welcome to Ponicode!")
        expect(result).toBe("PONICODEthe awesome ponicode/the awesome ponicode/Welcome to Ponicode!")
    })
})

// @ponicode
describe("ceoTranslate", () => {
    test("0", () => {
        let result = ceoTranslate("")
        expect(result).toBe("")
    })

    test("1", () => {
        let result = ceoTranslate("Hello, world!(ibm)|(IBM)/")
        expect(result).toBe("Hello, world!(company in the past)|(company in the past)/")
    })

    test("2", () => {
        let result = ceoTranslate("Foo bar(ibm)|(IBM)/(ibm)|(IBM)/PONICODE")
        expect(result).toBe("Foo bar(company in the past)|(company in the past)/(company in the past)|(company in the past)/PONICODE")
    })

    test("3", () => {
        let result = ceoTranslate("(ibm)|(IBM)/H3ll0! P0n1c0d3 iz g00d")
        expect(result).toBe("(company in the past)|(company in the past)/H3ll0! P0n1c0d3 iz g00d")
    })

    test("4", () => {
        let result = ceoTranslate("H3ll0! P0n1c0d3 iz g00d")
        expect(result).toBe("H3ll0! P0n1c0d3 iz g00d")
    })

    test("5", () => {
        let result = ceoTranslate("(ibm)|(IBM)/")
        expect(result).toBe("(company in the past)|(company in the past)/")
    })
})

// @ponicode
describe("subsets", () => {
    test("0", () => {
        subsets({}, "")
    })

    test("1", () => {
        let result = subsets({ master: { lastname: "Jean-Philippe", firstname: "خليل" } }, "p")
        expect(result).toEqual({ result: "Tom Jean-Philippe", t: { a: 3 } })
    })

    test("2", () => {
        let result = subsets({ master: { lastname: "Jean-Philippe", firstname: "萧" } }, "Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toEqual({ result: "Tom Jean-Philippe", t: { a: 3 } })
    })

    test("3", () => {
        let result = subsets({ master: { lastname: "萧", firstname: "萧" } }, "\"#'{7855663]}ééàà")
        expect(result).toEqual({ result: "Tom 萧", t: { a: 3 } })
    })

    test("4", () => {
        let result = subsets({ master: { lastname: "George", firstname: "Pierre Edouard" } }, "\"#'{7855663]}ééàà")
        expect(result).toEqual({ result: "Tom George", t: { a: 3 } })
    })

    test("5", () => {
        let result = subsets({ master: { lastname: "萧", firstname: "Pierre Edouard" } }, "\"#'{7855663]}ééàà")
        expect(result).toEqual({ result: "Tom 萧", t: { a: 3 } })
    })
})

// @ponicode
describe("testejekke", () => {
    test("0", () => {
        let result = testejekke("")
        expect(result).toBe(1000)
    })

    test("1", () => {
        let result = testejekke("Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe(1000)
    })

    test("2", () => {
        let result = testejekke("\"#'{7855663]}ééàà")
        expect(result).toBe(1000)
    })

    test("3", () => {
        let result = testejekke("Thank you for using PONICODE! Get to 80% coverage super fast !")
        expect(result).toBe(1000)
    })

    test("4", () => {
        let result = testejekke("p")
        expect(result).toBe(1000)
    })

    test("5", () => {
        let result = testejekke("123456789")
        expect(result).toBe(1000)
    })
})

// @ponicode
describe("subsetsII", () => {
    test("0", () => {
        subsetsII("")
    })

    test("1", () => {
        subsetsII("User0@Ponicode.com")
    })

    test("2", () => {
        subsetsII("user1+user2@ponicode.com")
    })

    test("3", () => {
        subsetsII("user@ponicode")
    })

    test("4", () => {
        subsetsII("user@ponicode.co.uk")
    })

    test("5", () => {
        subsetsII("user@ponicode.com")
    })
})

// @ponicode
describe("subsetsIII", () => {
    test("0", () => {
        subsetsIII({})
    })

    test("1", () => {
        subsetsIII({ type: "RECEIVE_MESSAGE" })
    })

    test("2", () => {
        subsetsIII({ type: "ADD_TODO" })
    })
})

// @ponicode
describe("a", () => {
    test("0", () => {
        let result = a("")
        expect(result).toBe(0)
    })

    test("1", () => {
        let result = a("p")
        expect(result).toBe(NaN)
    })

    test("2", () => {
        let result = a("\"#'{7855663]}ééàà")
        expect(result).toBe(NaN)
    })

    test("3", () => {
        let result = a("Ponicponicodeponiponicoooooooooode18774563")
        expect(result).toBe(NaN)
    })

    test("4", () => {
        let result = a("123456789")
        expect(result).toBe(246913578)
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
        let result = teyeujik({ string: "foo bar" })
        expect(result).toBe("foo bar hello")
    })

    test("3", () => {
        let result = teyeujik({ string: "H3ll0! P0n1c0d3 iz g00d" })
        expect(result).toBe("H3ll0! P0n1c0d3 iz g00d hello")
    })

    test("4", () => {
        let result = teyeujik({ string: "Foo bar" })
        expect(result).toBe("Foo bar hello")
    })

    test("5", () => {
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
        let result = FYGHJL({ string: "Welcome to Ponicode!" })
        expect(result).toBe("Welcome to Ponicode! hello")
    })

    test("2", () => {
        let result = FYGHJL({ string: "H3ll0! P0n1c0d3 iz g00d" })
        expect(result).toBe("H3ll0! P0n1c0d3 iz g00d hello")
    })

    test("3", () => {
        let result = FYGHJL({ string: "foo bar" })
        expect(result).toBe("foo bar hello")
    })

    test("4", () => {
        let result = FYGHJL({ string: "Hello, world!" })
        expect(result).toBe("Hello, world! hello")
    })

    test("5", () => {
        let result = FYGHJL({ string: "PONICODE" })
        expect(result).toBe("PONICODE hello")
    })
})

// @ponicode
describe("AAAAAAAAA", () => {
    test("0", () => {
        let result = AAAAAAAAA({})
        expect(result).toBe("undefined hello")
    })

    test("1", () => {
        let result = AAAAAAAAA({ string: "H3ll0! P0n1c0d3 iz g00d" })
        expect(result).toBe("H3ll0! P0n1c0d3 iz g00d hello")
    })

    test("2", () => {
        let result = AAAAAAAAA({ string: "PONICODE" })
        expect(result).toBe("PONICODE hello")
    })

    test("3", () => {
        let result = AAAAAAAAA({ string: "Foo bar" })
        expect(result).toBe("Foo bar hello")
    })

    test("4", () => {
        let result = AAAAAAAAA({ string: "foo bar" })
        expect(result).toBe("foo bar hello")
    })

    test("5", () => {
        let result = AAAAAAAAA({ string: "Welcome to Ponicode!" })
        expect(result).toBe("Welcome to Ponicode! hello")
    })
})
