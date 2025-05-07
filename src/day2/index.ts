import { Day } from "../day";


class Day2 extends Day {

    constructor(){
        super(2);
    }

    solveForSample(input: string): string {
        let p1 = this.solveForPartOne(input);
        return p1;
    }
    
    solveForPartOne(input: string): string {
        
        let safe_reports = 0;
        let reports = input.split("\n");
        reports.forEach(report => {
            let levels = report.split(" ").map(Number);
            let is_unsafe = this.testLevels(levels)
            if (!is_unsafe)
                safe_reports += 1;
        });
        
        return safe_reports.toString();
    }

    solveForPartTwo(input: string): string {
        return input;
    }

    testLevels(input: Array<number>): boolean {
        let is_safe = true;
        for (let i = 1; i < input.length; i++) {
            // rule 1: Levels must decrease or increase.
            // rule 2: adjacent levels differ by at least 1 or at most 3
            
            // If absolute value is > 3 or values are same = Unsafe test
            if (Math.abs(input[i-1] - input[i]) > 3 || input[i-1] == input[i])
            {
                is_safe = false;
            }
            // if previous and next values are both greater = Unsafe test
            if (input.indexOf(i+1) != -1 && input[i-1] > input[i] && input[i+1] > input[i])
            {
                is_safe = false;
            }
            // if previous and next values are both lesser = Unsafe test
            if (input.indexOf(i+1) != -1 && input[i-1] < input[i] && input[i+1] < input[i])
            {
                is_safe = false;
            }
        }
        console.log(`Test is: ${is_safe ? "Safe" : "Unsafe"}`);
        return is_safe;
    }
}

export default new Day2;