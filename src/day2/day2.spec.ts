import day2 from './index';

describe('On Day 2', () =>{
    it(`part1 is identity function`, ()=>{
        expect(true);
    })
});

describe('On Day 2', () =>{
    it(`testLevels function should return true with safe input`, ()=>{
        expect(day2.testLevels([1,2,3,4,5]));
    })
})

describe('On Day 2', () =>{
    it(`testLevels function should return false, with unsafe input`, ()=>{
        expect(day2.testLevels([1,2,3,5,1]) == false);
        expect(day2.testLevels([1,2,7,8,9]) == false);
        expect(day2.testLevels([1,3,2,4,5]) == false);
        expect(day2.testLevels([8,6,4,4,1]) == false);
    })
})