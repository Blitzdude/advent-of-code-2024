import { Day } from "../day";

class Day3 extends Day {

    constructor(){
        super(3);
    }

    solveForSample(input: string): string {
        let instructions = this.extractInstructions(input);
        let result1 = this.runMultiplication(instructions);
        let result2 = this.runMultiplicationWithSwitching(instructions);

        return `part1: ${result1.toString()} par22: ${result2.toString()}`
    }
    
    solveForPartOne(input: string): string {
        let instructions = this.extractInstructions(input);
        let result = this.runMultiplication(instructions);
        return result.toString();
    }

    solveForPartTwo(input: string): string {
        let instructions = this.extractInstructions(input);
        let result = this.runMultiplicationWithSwitching(instructions);
        return result.toString();
    }

    extractInstructions(input: string): Array<string> {
        let result: Array<string> = []
        // Match mul(xxx,yyy), don't() and do() instructions
        const matches = input.match(/mul\(\d{1,3},\d{1,3}\)|don't\(\)|do\(\)/g)
        if (matches) {
            matches.forEach(element => {
                result.push(element);
            });
        }

        return result;
    }

    runMultiplication(instructions: Array<string>): number {
        let sumResult = 0;
        instructions.forEach(ins => {
            if (ins.match(/mul\(\d{1,3},\d{1,3}\)/)) {
                
                let x = Number(ins.match(/\d{1,3}/));
                let y = Number(ins.match(/\d{1,3}(?=\)$)/));
                sumResult += x * y;
            }

        });
        return sumResult;
    }

    runMultiplicationWithSwitching(instructions: Array<string>): number {
        let sumResult = 0;
        let doMultiplication = true;

        instructions.forEach(ins => {
            if (doMultiplication == true && ins.match(/don't\(\)/)) {
                doMultiplication = false;
            }
            else if (doMultiplication == false && ins.match(/do\(\)/)) {
                doMultiplication = true;
            }
            else if (doMultiplication == true && ins.match(/mul\(\d{1,3},\d{1,3}\)/)) {
                let x = Number(ins.match(/\d{1,3}/));
                let y = Number(ins.match(/\d{1,3}(?=\)$)/));
                sumResult += x * y;
            }
        });

        return sumResult;
    }
    
}

export default new Day3;