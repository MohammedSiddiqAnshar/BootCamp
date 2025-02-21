let cel = document.getElementById('celsius');
let far = document.getElementById('fahrenheit');


function celToFar(){
    let c = cel.value;
    let f = (parseFloat(c * 9/5 + 32));
    far.value = parseFloat(f.toFixed(2));
    console.log(f);
}

function fahToCel(){
    let f = far.value;
    let c = (parseFloat(f - 32) * 5/9);
    cel.value = parseFloat(c.toFixed(2));
    console.log(c);
}

