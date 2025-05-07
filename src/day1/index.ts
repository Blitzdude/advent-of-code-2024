import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }
    
    
    solveForSample(input: string): string {
        // Part1
        let p1 = this.solveForPartOne(input);

        // Part 2
        let p2 = this.solveForPartTwo(input);

        return `Part 1: ${p1.toString()}\nPart 2: ${p2.toString()}`;
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
        let left: Array<number> = []
        let right: Array<number> = []

        input.split("\n").forEach(line => {
            let pair = line.split("  ");
            left.push(parseInt(pair[0]));
            right.push(parseInt(pair[1]));
        });

        let similarity_score = 0;
        for (let i = 0; i < left.length; i++)
        {
            let count = 0
            for (let j = 0; j < right.length; j++)
            {
                if (left[i] == right[j])
                    count += 1;
            }
            similarity_score += left[i] * count;
        }

        return similarity_score.toString();
    }
}

export default new Day1;