const rewire = require("rewire")

describe("1. Exponential Values", () => {
    test('Function `printExponentialValues` exists', () => {
        const index = rewire('../index')
        const logMock = jest.fn();
        index.__set__('console', {
            log: logMock,
        });
        const printExponentialValues = index.__get__('printExponentialValues')
        expect(printExponentialValues).toBeDefined()
        expect(typeof printExponentialValues).toBe('function')
    })
    test('Function prints series of exponential numbers based on passed arguements', () => {
        const index = rewire('../index')
        const logMock = jest.fn();
        index.__set__('console', {
            log: logMock,
        });
        index.__get__('printExponentialValues')(x = 3, y = 5);
        expect(logMock).toHaveBeenCalledWith('3 9 27 81 243 ')

    })
    test("Function prints error message if one or both passed arguments are not a number", () => {
        const index = rewire('../index')
        const logMock = jest.fn();
        index.__set__('console', {
            log: logMock,
        });
        const result = 'x or y is not a number';
        index.__get__('printExponentialValues')();
        expect(logMock).toHaveBeenCalledWith(result)
    })
})

describe("2. Fruits closure", () => {
    test("Variable `fruit` should exist", () => {
        const index = rewire('../index')
        const logMock = jest.fn();
        index.__set__('console', {
            log: logMock,
        });
        const fruit = index.__get__('fruit')
        expect(fruit).toBeDefined()
    })
    test("The function `printFavoriteFruit` should exist", () => {
        const index = rewire('../index')
        const logMock = jest.fn();
        index.__set__('console', {
            log: logMock,
        });
        const printFavoriteFruit = index.__get__('printFavoriteFruit')
        expect(printFavoriteFruit).toBeDefined()
        expect(typeof printFavoriteFruit).toBe('function')
    })
    test("The variable is reassigned and logged to the console", () => {
        const index = rewire('../index')
        const logMock = jest.fn();
        index.__set__('console', {
            log: logMock,
        });
        const fruit = index.__get__('fruit')
        index.__get__('printFavoriteFruit')();
        expect(logMock).toHaveBeenCalledWith(expect.stringContaining(fruit));
    })
})

describe('3. Multiply a Number by Itself', () => {
    // multiple cases
    const cases = [
        // input, expected result
        [2, 3,    [2, 4, 8]],
        [3, 4,    [3, 9, 27, 81]],
        [4, 5,    [4, 16, 64, 256, 1024]]
    ]

    test("The function `exponent` should exist", () => {
        const index = rewire('../index')
        const logMock = jest.fn();
        index.__set__('console', {
            log: logMock,
        });
        const exponent = index.__get__('exponent')
        expect(exponent).toBeDefined()
        expect(typeof exponent).toBe('function')
    })

    test.each(cases)(
        "given %p and %p as arguments, logs %p",
        (firstArg, secondArg, expectedResults) => {
            const index = rewire('../index')
            const logMock = jest.fn();
            index.__set__('console', {
                log: logMock,
            });
            // get function
            const exponent = index.__get__('exponent')
            // get reference to console in solution
            const solutionConsole = index.__get__('console')
            // setup log mock with solution console
            const consoleSpy = jest.spyOn(solutionConsole, 'log')
            // run function
            exponent(firstArg, secondArg)
            // analyze log output
            // join arguments of each call
            const found = consoleSpy.mock.calls.map(it => it.join(' ')).reduce((acc, element, i) => {
                const expected = expectedResults[i]
                // check if calls contain the expected number somewhere in the log output
                if(element.includes(expected)) acc.push(expected)
                return acc
            }, []);
            expect(found).toEqual(expect.arrayContaining(expectedResults))
            // clear call log for next case
            consoleSpy.mockClear()
        }
    )
})