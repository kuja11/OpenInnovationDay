import { expect } from "chai";
import "mocha";
import { ExampleUtilFunction } from "../../src/lib/ExampleUtil";

// First describe should be used to declare the file that is being tested.
// In this case it is the ExampleUtil file
describe("Example Util Tests", () => {

    // Next describe should then portray what function/class that is being tested.
    // For this example we have a simple string function
    describe("ExampleUtilFunction", () => {

        // Once both describes are made, we then write what we expect it to do.
        // In this case we expect it to say Hello World when we input "World"
        it("Should say Hello World", () => {
            const input = "World";
            const expected = "Hello World";
            const result = ExampleUtilFunction(input);

            expect(result).to.equal(expected);
        });

        // It is always good to do double checks and input something unexpected
        // You never know who might misuse your code!
        it("Should accept a number passed as any", () => {
            const input: any = 2;
            const expected = "Hello 2";
            const result = ExampleUtilFunction(input);

            expect(result).to.equal(expected);
        })
    });
});

