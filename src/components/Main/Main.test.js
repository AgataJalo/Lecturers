const rewire = require("rewire")
const Main = rewire("./Main")
const AddForm = Main.__get__("AddForm")

// @ponicode
describe("checkboxCourses", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Michael", "Anas"], ["Edmond", "Pierre Edouard", "Pierre Edouard"], ["Anas", "Anas", "Jean-Philippe"]]
        inst = new AddForm(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.checkboxCourses({ currentTarget: { value: ["Dillenberg", "Elio"], checked: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.checkboxCourses({ currentTarget: { value: ["Elio", "Dillenberg"], checked: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.checkboxCourses({ currentTarget: { value: ["elio@example.com", "Elio"], checked: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.checkboxCourses({ currentTarget: { value: ["elio@example.com", "Elio"], checked: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.checkboxCourses({ currentTarget: { value: ["Dillenberg", "elio@example.com"], checked: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.checkboxCourses(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("checkboxLocalization", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Jean-Philippe", "Pierre Edouard"], ["Edmond", "Anas", "Jean-Philippe"], ["Michael", "Pierre Edouard", "Jean-Philippe"]]
        inst = new AddForm(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.checkboxLocalization({ currentTarget: { value: ["elio@example.com", "Elio", "Elio", "Elio", "elio@example.com", "Dillenberg", "Dillenberg", "Dillenberg"], checked: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.checkboxLocalization({ currentTarget: { value: ["Dillenberg", "Dillenberg", "elio@example.com", "Dillenberg", "Elio", "Elio", "elio@example.com", "Dillenberg"], checked: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.checkboxLocalization({ currentTarget: { value: ["elio@example.com", "Dillenberg", "Dillenberg", "Elio", "Dillenberg", "Dillenberg", "elio@example.com", "Dillenberg"], checked: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.checkboxLocalization({ currentTarget: { value: ["elio@example.com", "elio@example.com", "Elio", "Elio", "Dillenberg", "elio@example.com", "Dillenberg", "elio@example.com"], checked: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.checkboxLocalization({ currentTarget: { value: ["Elio", "elio@example.com", "Elio", "Elio", "elio@example.com", "Elio", "Elio", "elio@example.com"], checked: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.checkboxLocalization(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("checkboxMode", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Edmond"], ["George", "George", "Pierre Edouard"], ["George", "George", "George"]]
        inst = new AddForm(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.checkboxMode({ currentTarget: { value: ["elio@example.com", "Elio", "Elio", "Dillenberg", "elio@example.com", "elio@example.com"], checked: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.checkboxMode({ currentTarget: { value: ["Dillenberg", "elio@example.com", "Dillenberg", "Dillenberg", "Dillenberg", "Dillenberg"], checked: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.checkboxMode({ currentTarget: { value: ["Dillenberg", "Dillenberg", "Dillenberg", "Elio", "Elio", "Dillenberg"], checked: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.checkboxMode({ currentTarget: { value: ["elio@example.com", "Elio", "Dillenberg", "elio@example.com", "elio@example.com", "elio@example.com"], checked: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.checkboxMode({ currentTarget: { value: ["elio@example.com", "Dillenberg", "Dillenberg", "elio@example.com", "elio@example.com", "Elio"], checked: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.checkboxMode(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
