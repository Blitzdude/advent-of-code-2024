import { Day } from './day';
import day0 from './day0/index';
import day1 from './day1/index';
import day2 from './day2/index';
import day3 from './day3/index';
import day4 from './day4/index';
// MORE IMPORTS HERE
const days: Day[] = [
    day0,
    day1,
    day2,
    day3,
    day4,
    // MORE DAYS HERE
];

async function runDay(dayId: number, run_sample: string) {

  if (run_sample == "true") {

    console.log("Sample result:\n");
    const resultSample = await days[dayId].sample();
    console.log(resultSample);

  }
  else {
    const resultPart1 = await days[dayId].partOne();
    console.log("Part 1 result:\n");
    console.log(resultPart1);
    
    console.log("\n");
    
    const resultPart2 = await days[dayId].partTwo();
    console.log("Part 2 result:\n");
    console.log(resultPart2);
  }
}

console.log("\n\n\n   ADVENT OF CODE \n\n");
const params = process.argv.splice(2);
if (params.length) {
  runDay(parseInt(params[0], 10), params[1]);
} else {
  console.log(`Usage: npm run start [day]`);
  console.log(`Available days: [ ${days.map((x) => x.id).join(", ")} ]`);
}