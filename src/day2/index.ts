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
            if (this.verifyLevelsAreMonotone(levels))
                safe_reports += 1;
        });
        
        return safe_reports.toString();
    }

    solveForPartTwo(input: string): string {
        return input;
    }

    verifyLevelsAreMonotone(input: Array<number>): boolean {
        let is_monotone = true; // is the function always increasing/decreasing
        let is_increasing = true; // true means increasing, false means decreasing

        if(input[0] > input[1]) {
            is_increasing = false;
        }

        for (let i = 0; i < input.length-1; i++) {
            if (input[i] == input[i+1]) {
                is_monotone = false;
                break;
            }
            // next number is increasing, when levels should decrease
            if (input[i] < input[i+1] && is_increasing == false) {
                is_monotone = false;
                break;
            }
            // next number is decreasing, when levels should increase
            if (input[i] > input[i+1] && is_increasing == true) {
                is_monotone = false;
                break;
            }
        }
        return is_monotone;
    }

    // return true if levels only increase or decrese
    verifyLevelsAreStable(input: Array<number>): boolean {
        let is_safe = true;
        for (let i = 1; i < input.length; i++) {
            // rule 1: Levels must decrease or increase.
            // rule 2: adjacent levels must differ by 1
            // rule 3: adjacent levels must differ by 3 or less.
            
            // If absolute value is > 3 or values are same = Unsafe test
            if (Math.abs(input[i-1] - input[i]) >= 4 || input[i-1] - input[i] == 0)
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
        return is_safe;
    }
}

export default new Day2;