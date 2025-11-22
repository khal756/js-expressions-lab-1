//! Start by creating the variables for the data recorded
let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
let day5TempF = 80;
let day6TempC = 15;
let day7TempF = 72;
let day8TempC = 28;
let day9TempF = 68;
let day10TempC = 20;
let day11TempF = 75;
let day12TempC = 23;
let day13TempF = 82;
let day14TempC = 30;
let day15TempF = 65;
let day16TempC = 22;
let day17TempF = 77;
let day18TempC = 26;
let day19TempF = 78;
let day20TempC = 24;
let day21TempF = 73;
let day22TempC = 21;
let day23TempF = 79;
let day24TempC = 27;
let day25TempF = 71;
let day26TempC = 19;
let day27TempF = 74;
let day28TempC = 17;
let day29TempF = 76;
let day30TempC = 29;

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
let day1TempFahrenheit = day1TempF;
let day2TempFahrenheit = (day2TempC * 9 / 5) + 32;
let day3TempFahrenheit = day3TempF;
let day4TempFahrenheit = (day4TempC * 9 / 5) + 32;
let day5TempFahrenheit = day5TempF;
let day6TempFahrenheit = (day6TempC * 9 / 5) + 32;
let day7TempFahrenheit = day7TempF;
let day8TempFahrenheit = (day8TempC * 9 / 5) + 32;
let day9TempFahrenheit = day9TempF;
let day10TempFahrenheit = (day10TempC * 9 / 5) + 32;
let day11TempFahrenheit = day11TempF;
let day12TempFahrenheit = (day12TempC * 9 / 5) + 32;
let day13TempFahrenheit = day13TempF;
let day14TempFahrenheit = (day14TempC * 9 / 5) + 32;
let day15TempFahrenheit = day15TempF;
let day16TempFahrenheit = (day16TempC * 9 / 5) + 32;
let day17TempFahrenheit = day17TempF;
let day18TempFahrenheit = (day18TempC * 9 / 5) + 32;
let day19TempFahrenheit = day19TempF;
let day20TempFahrenheit = (day20TempC * 9 / 5) + 32;
let day21TempFahrenheit = day21TempF;
let day22TempFahrenheit = (day22TempC * 9 / 5) + 32;
let day23TempFahrenheit = day23TempF;
let day24TempFahrenheit = (day24TempC * 9 / 5) + 32;
let day25TempFahrenheit = day25TempF;
let day26TempFahrenheit = (day26TempC * 9 / 5) + 32;
let day27TempFahrenheit = day27TempF;
let day28TempFahrenheit = (day28TempC * 9 / 5) + 32;
let day29TempFahrenheit = day29TempF;
let day30TempFahrenheit = (day30TempC * 9 / 5) + 32;

//convert them first to celsius
let day1TempCelsius = (day1TempF - 32) * 5 / 9;
let day2TempCelsius = day2TempC;
let day3TempCelsius = (day3TempF - 32) * 5 / 9;
let day4TempCelsius = day4TempC;
let day5TempCelsius = (day5TempF - 32) * 5 / 9;
let day6TempCelsius = day6TempC;
let day7TempCelsius = (day7TempF - 32) * 5 / 9;
let day8TempCelsius = day8TempC;
let day9TempCelsius = (day9TempF - 32) * 5 / 9;
let day10TempCelsius = day10TempC;
let day11TempCelsius = (day11TempF - 32) * 5 / 9;
let day12TempCelsius = day12TempC;
let day13TempCelsius = (day13TempF - 32) * 5 / 9;
let day14TempCelsius = day14TempC;
let day15TempCelsius = (day15TempF - 32) * 5 / 9;
let day16TempCelsius = day16TempC;
let day17TempCelsius = (day17TempF - 32) * 5 / 9;
let day18TempCelsius = day18TempC;
let day19TempCelsius = (day19TempF - 32) * 5 / 9;
let day20TempCelsius = day20TempC;
let day21TempCelsius = (day21TempF - 32) * 5 / 9;
let day22TempCelsius = day22TempC;
let day23TempCelsius = (day23TempF - 32) * 5 / 9;
let day24TempCelsius = day24TempC;
let day25TempCelsius = (day25TempF - 32) * 5 / 9;
let day26TempCelsius = day26TempC;
let day27TempCelsius = (day27TempF - 32) * 5 / 9;
let day28TempCelsius = day28TempC;
let day29TempCelsius = (day29TempF - 32) * 5 / 9;
let day30TempCelsius = day30TempC;

//total temp
let tot_temperature_in_fahrenheit = day1TempFahrenheit + day2TempFahrenheit + day3TempFahrenheit + day4TempFahrenheit + day5TempFahrenheit + day6TempFahrenheit + day7TempFahrenheit + day8TempFahrenheit + day9TempFahrenheit + day10TempFahrenheit + day11TempFahrenheit + day12TempFahrenheit + day13TempFahrenheit + day14TempFahrenheit + day15TempFahrenheit + day16TempFahrenheit + day17TempFahrenheit + day18TempFahrenheit + day19TempFahrenheit + day20TempFahrenheit + day21TempFahrenheit + day22TempFahrenheit + day23TempFahrenheit + day24TempFahrenheit + day25TempFahrenheit + day26TempFahrenheit + day27TempFahrenheit + day28TempFahrenheit + day29TempFahrenheit + day30TempFahrenheit;

let tot_temperature_in_celsius = day1TempCelsius + day2TempCelsius + day3TempCelsius + day4TempCelsius + day5TempCelsius + day6TempCelsius + day7TempCelsius + day8TempCelsius + day9TempCelsius + day10TempCelsius + day11TempCelsius + day12TempCelsius + day13TempCelsius + day14TempCelsius + day15TempCelsius + day16TempCelsius + day17TempCelsius + day18TempCelsius + day19TempCelsius + day20TempCelsius + day21TempCelsius + day22TempCelsius + day23TempCelsius + day24TempCelsius + day25TempCelsius + day26TempCelsius + day27TempCelsius + day28TempCelsius + day29TempCelsius + day30TempCelsius;

//avarage temp

let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//print results

console.log("Total Fahrenheit: " + tot_temperature_in_fahrenheit);
console.log("Average Fahrenheit: " + avg_temperature_in_fahrenheit);
console.log("Total Celsius: " + tot_temperature_in_celsius);
console.log("Average Celsius: " + avg_temperature_in_celsius);
