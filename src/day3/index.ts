import { strict } from "assert";
import { Day } from "../day";

class Day3 extends Day {

    constructor(){
        super(3);
    }

    solveForSample(input: string): string {
        return input;
    }
    
    solveForPartOne(input: string): string {
        return input;
    }

    solveForPartTwo(input: string): string {
        return input;
    }

    extractInstructions(input: string): Array<string> {
        let result: Array<string> = []
        const matches = input.match(/mul\(\d,\d\)/)
        if (matches) {
            matches.forEach(element => {
                result.push(element);
            });
        }

        return result;
    }
}

export default new Day3;