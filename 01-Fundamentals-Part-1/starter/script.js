const age = 16;
const canZoom = age >= 16;
if (canZoom) {
    console.log('CAN ZOOM!');
} else {
    const yearsLeft = 16 - age;
    console.log(`Cannot zoom for ${yearsLeft} years :(`)
}

