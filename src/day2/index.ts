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
            let monotone_idx = this.verifyLevelsAreMonotone(levels);
            let stability_idx = this.verifyLevelsAreStable(levels);

            if (monotone_idx == -1 && stability_idx == -1)
                anyOk = true;
            else {
                let idx_to_check = -1;

                if (monotone_idx == -1)
                    idx_to_check = stability_idx;
                else if (stability_idx == -1)
                    idx_to_check = monotone_idx;
                else if (monotone_idx < stability_idx)
                    idx_to_check = monotone_idx;

                if (this.considerIfLevelsValid(levels, idx_to_check - 1)
                    || this.considerIfLevelsValid(levels, idx_to_check)
                    || this.considerIfLevelsValid(levels, idx_to_check + 1)) {
                    anyOk = true;
                }

            }
            if (anyOk)
                safe_reports += 1;
        });
        
        return safe_reports.toString();
    }

    // returns -1, if levels only increase/decrease.
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

    // consider, if removing an element makes the levels pass the test.
    // remove elements around the index and see if levels have no more problems.
    considerIfLevelsValid(levels: Array<number>, idx: number): boolean {
        // cannot check index out of range 
        if (idx < 0 || idx >= levels.length)
            return false;

        let is_valid = true;
        let new_levels = levels.slice()
        new_levels.splice(idx, 1)

        if (this.verifyLevelsAreMonotone(new_levels) >= 0) {
            is_valid = false;
        }
        
        if (this.verifyLevelsAreStable(new_levels) >= 0) {
            is_valid = false;
        };

        return is_valid;
    }
}

export default new Day2;