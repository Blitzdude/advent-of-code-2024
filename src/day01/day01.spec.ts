import day01 from "./index.js";

describe('ON Day 1', () => {
    it(`part 1 is identity function`, ()=>{
        expect(day01.solveForPartOne('hello')).toBe('hello');
    })
})