import day2 from './index';

describe('On Day 2', () =>{
    it(`part1 is identity function`, ()=>{
        expect(true);
    })
});

describe('On Day 2', () =>{
    it(`verifyLevelsAreStable function should return true with monotone input`, ()=>{
        expect(day2.verifyLevelsAreMonotone([1,2,3,4,5])).toBe(true);
        expect(day2.verifyLevelsAreMonotone([5,4,3,2,1])).toBe(true);
    })
})

describe('On Day 2', () =>{
    it(`verifyLevelsAreStable function should return false, with unmonotone input`, ()=>{
        expect(day2.verifyLevelsAreMonotone([1,1,2,2,3])).toBe(false);
        expect(day2.verifyLevelsAreMonotone([1,2,1,2,1])).toBe(false);
        expect(day2.verifyLevelsAreMonotone([3,2,1,2,3])).toBe(false);
    })
})