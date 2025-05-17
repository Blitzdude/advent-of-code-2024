import { Day } from "../day";


class Day2 extends Day {

    constructor(){
        super(2);
    }

    solveForSample(input: string): string {
        let p1 = this.solveForPartOne(input);
        let p2 = this.solveForPartTwo(input);

        return `Part1: ${p1}, Part2: ${p2}`;
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
        let safe_reports = 0;
        let reports = input.split("\n");
        reports.forEach(report => {
            let levels = report.split(" ").map(Number);
            
            let anyOk = false

            if (this.verifyLevelsAreMonotone(levels) == -1 && this.verifyLevelsAreStable(levels) == -1) {
                anyOk = true;
            }
            else {
                // Check for possible safe levels by removing elements one at a time.
                // TODO: This is a sort of brute force solution, but it works.
                for (let i = 0; i < levels.length; i++) {
                    let new_levels = levels.slice();
                    new_levels.splice(i, 1);
                    if (this.verifyLevelsAreMonotone(new_levels) == -1 && this.verifyLevelsAreStable(new_levels) == -1) {
                        anyOk = true;
                        break;
                    }
                }
            }

            if (anyOk)
                safe_reports += 1;
        });
        
        return safe_reports.toString();
    }

    // verify, that levels only increase or decrease. returns -1, if levels only increase/decrease. Otherwise returns and where problem was found.
    verifyLevelsAreMonotone(input: Array<number>): number {
        let is_increasing = true; // true means increasing, false means decreasing

        // first two numbers are the same.
        if (input[0] == input[1]){
            return 0;
        }

        if (input[0] > input[1]) {
            is_increasing = false;
        }

        for (let i = 0; i < input.length-1; i++) {
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

    // verify, that levels always change at least by 1 or 3. Returns -1 if safe, otherwise returns index of the element with problem.
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