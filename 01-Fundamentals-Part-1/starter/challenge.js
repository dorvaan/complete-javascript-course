let markMass = 95;
let markHeight = 1.88;
let markBMI = markMass / markHeight ** 2;
let johnMass = 85;
let johnHeight = 1.76;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = false;

if (markBMI > johnBMI) {
  markHigherBMI = true;
}
console.log(markBMI);
console.log(johnBMI);
console.log(`Mark has a BMI of ${markBMI} and John has a BMI of ${johnBMI}`);
console.log(markHigherBMI);

const avgDolphin = (97 + 112 + 101) / 3;
const avgKoala = (109 + 95 + 106) / 3;

console.log(`Dolphins scored ${avgDolphin}.  Koalas scored ${avgKoala}`)
if (avgDolphin < 100 || avgKoala < 100) {
    console.log("Need more points!")
} else if (avgDolphin === avgKoala) {
    console.log("It's a draw")
} else if (avgDolphin > avgKoala) {
    console.log("Dolphins Win")
} else if (avgKoala > avgDolphin) {
    console.log("Koalas WIN!")
}