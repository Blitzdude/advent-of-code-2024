import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }
    
    
    solveForSample(input: string): string {
        let pair1: Array<number> = []
        let pair2: Array<number> = []

        input.split("\n").forEach(line => {
            let pair = line.split("  ");
            pair1.push(parseInt(pair[0]));
            pair2.push(parseInt(pair[1]));
        });

        pair1.sort();
        pair2.sort();

        let sum = 0;
        for (let i = 0; i < pair1.length; i++ )
        {
            let pairDiff = pair1[i] - pair2[i] >= 0 ? pair1[i] - pair2[i] : -(pair1[i] - pair2[i]);
            sum += pairDiff;
        }

        return sum.toString();
    }

    solveForPartOne(input: string): string {
        let pair1: Array<number> = []
        let pair2: Array<number> = []

        input.split("\n").forEach(line => {
            let pair = line.split("  ");
            pair1.push(parseInt(pair[0]));
            pair2.push(parseInt(pair[1]));
        });

        pair1.sort();
        pair2.sort();

        let sum = 0;
        for (let i = 0; i < pair1.length; i++ )
        {
            let pairDiff = pair1[i] - pair2[i] >= 0 ? pair1[i] - pair2[i] : -(pair1[i] - pair2[i]);
            sum += pairDiff;
        }

        return sum.toString();
    }

    solveForPartTwo(input: string): string {
        return input;
    }
}

export default new Day1;