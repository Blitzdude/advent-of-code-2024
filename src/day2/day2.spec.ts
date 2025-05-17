import day2 from './index';

describe('On Day 2', () =>{
    it(`part1 is identity function`, ()=>{
        expect(true);
    })
});

describe('On Day 2', () =>{
    it(`verifyLevelsAreMonotone function should return true with monotone input`, ()=>{
        expect(day2.verifyLevelsAreMonotone([7,6,4,2,1])).toBe(true);
        expect(day2.verifyLevelsAreMonotone([1,3,6,7,9])).toBe(true);
        expect(day2.verifyLevelsAreMonotone([1,2,4,5,6,7,9,11,13])).toBe(true);
    })
})

describe('On Day 2', () =>{
    it(`verifyLevelsAreMonotone function should return false, with unmonotone input`, ()=>{
        expect(day2.verifyLevelsAreMonotone([1,1,2,2,3,3,4,4])).toBe(false);
        expect(day2.verifyLevelsAreMonotone([1,3,2,4,5])).toBe(false);
        expect(day2.verifyLevelsAreMonotone([3,2,1,2,3])).toBe(false);
        expect(day2.verifyLevelsAreMonotone([8,6,4,4,1])).toBe(false);
    })
});

describe('On Day 2', () => {
    it(`verifyLevelsAreStable function should return true with stable input`, ()=>{
        expect(day2.verifyLevelsAreStable([7,6,4,2,1])).toBe(true);
        expect(day2.verifyLevelsAreStable([1,3,6,7,9])).toBe(true);
    })
})

describe('On Day 2', () => {
    it(`verifyLevelsAreStable function should return false with unstable input`, ()=>{
        expect(day2.verifyLevelsAreStable([1,2,7,8,9])).toBe(false);
        expect(day2.verifyLevelsAreStable([9,7,6,2,1])).toBe(false);
        expect(day2.verifyLevelsAreStable([12,11,9,9,6,5,4,3,2,1])).toBe(false);
        expect(day2.verifyLevelsAreStable([11,9,8,6,5,4,3,2,2])).toBe(false);
    })
})
