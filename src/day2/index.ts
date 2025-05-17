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
            if (this.verifyLevelsAreMonotone(levels) == -1 &&
                this.verifyLevelsAreStable(levels) == -1)
                safe_reports += 1;
        });
        
        return safe_reports.toString();
    }

    solveForPartTwo(input: string): string {
        return input;
    }

    // returns -1, if levels only increase/decrease.
    verifyLevelsAreMonotone(input: Array<number>): number {
        let is_increasing = true; // true means increasing, false means decreasing

        if(input[0] > input[1]) {
            is_increasing = false;
        }

        for (let i = 0; i < input.length-1; i++) {
            if (input[i] == input[i+1]) {
                return i;
            }
            // next number is increasing, when levels should decrease
            if (input[i] < input[i+1] && is_increasing == false) {
                return i;
            }
            // next number is decreasing, when levels should increase
            if (input[i] > input[i+1] && is_increasing == true) {
                return i;
            }
        }
        return -1;
    }

    // verify, that levels always change at least by 1 or 3. Returns -1 if safe, otherwise returns index of the element in levels.
    verifyLevelsAreStable(input: Array<number>): number {

        for (let i = 0; i <= input.length-1; i++) {
            // If absolute value is > 3 or values are same = Unsafe test
            if (Math.abs(input[i-1] - input[i]) >= 4 || input[i-1] - input[i] == 0)
            {
                return i;
            }
        }
        return -1;
    }
}

export default new Day2;