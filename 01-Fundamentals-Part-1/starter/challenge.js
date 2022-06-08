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
