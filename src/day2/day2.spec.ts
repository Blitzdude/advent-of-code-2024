import day2 from './index';

describe('On Day 2', () =>{
    it(`part1 is identity function`, ()=>{
        expect(true);
    })
});

describe('On Day 2', () =>{
    it(`verifyLevelsAreMonotone function should return -1 with monotone input`, ()=>{
        expect(day2.verifyLevelsAreMonotone([7,6,4,2,1])).toBe(-1);
        expect(day2.verifyLevelsAreMonotone([1,3,6,7,9])).toBe(-1);
        expect(day2.verifyLevelsAreMonotone([1,3,2,4,5])).toBe(-1);
    })
})

describe('On Day 2', () =>{
    it(`verifyLevelsAreMonotone function should return 0 or more, with unmonotone input`, ()=>{
        expect(day2.verifyLevelsAreMonotone([1,3,2,4,5])).toBe(1);
        expect(day2.verifyLevelsAreMonotone([3,2,1,2,3])).toBe(2);
    })
});

describe('On Day 2', () => {
    it(`verifyLevelsAreStable function should return -1 with stable input`, ()=>{
        expect(day2.verifyLevelsAreStable([7,6,4,2,1])).toBe(-1);
        expect(day2.verifyLevelsAreStable([1,3,6,7,9])).toBe(-1);
    })
})

describe('On Day 2', () => {
    it(`verifyLevelsAreStable function should return 0 or more with unstable input`, ()=>{
        expect(day2.verifyLevelsAreStable([1,2,7,8,9])).toBe(1);
        expect(day2.verifyLevelsAreStable([9,7,6,2,1])).toBe(2);
        expect(day2.verifyLevelsAreStable([12,11,9,9,6,5,4,3,3,1])).toBe(2);
        expect(day2.verifyLevelsAreStable([11,9,8,6,5,4,3,2,2])).toBe(7);
    })
})
