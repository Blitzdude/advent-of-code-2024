import day1 from './index';
import * as fs from 'fs'

describe('On Day 1', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day1.solveForPartOne('hello')).toBe('hello');
    })
});
