import { strict } from "assert";
import { Day } from "../day";
import { isNumberObject } from "util/types";

class Day3 extends Day {

    constructor(){
        super(3);
    }

    solveForSample(input: string): string {
        let instructions = this.extractInstructions(input);
        let result = this.multiplyUsingInstructions(instructions);
        return result.toString();
    }
    
    solveForPartOne(input: string): string {
        return input;
    }

    solveForPartTwo(input: string): string {
        return input;
    }

    extractInstructions(input: string): Array<string> {
        let result: Array<string> = []
        const matches = input.match(/mul\(\d{1,3},\d{1,3}\)/g)
        if (matches) {
            matches.forEach(element => {
                result.push(element);
            });
        }

        return result;
    }

    multiplyUsingInstructions(instructions: Array<string>): number {
        let sumResult = 0;
        instructions.forEach(ins => {
            let x = Number(ins.match(/\d{1,3}/));

            let y = Number(ins.match(/\d{1,3}(?=\)$)/));

            sumResult += x * y;

        });
        return sumResult;
    }
}

export default new Day3;