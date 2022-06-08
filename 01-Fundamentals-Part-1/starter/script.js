const age = 16;
const canZoom = age >= 16;
if (canZoom) {
    console.log('CAN ZOOM!');
} else {
    const yearsLeft = 16 - age;
    console.log(`Cannot zoom for ${yearsLeft} years :(`)
}

console.log(canZoom);


const bill = 207.18
let tip = bill >= 50 && bill <= 300 ? bill*.15 : bill *.2;

console.log(`The total amount paid on your $${bill} meal, including a $${tip} tip is ${bill+tip}`);