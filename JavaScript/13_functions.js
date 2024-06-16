function oneton(n){
    for(let i = 1; i <= n; i++){
        console.log(i);
    }
}
oneton(10);

function eqn(a, b){
    return Math.abs(a*a*a) + Math.abs(b*b*b);
}

console.log(eqn(2, 3));



// mathematical builtin functions

console.log(Math.abs(-7.6));
console.log(Math.max(5, 1));
console.log(Math.min(-5, 1));
console.log(Math.max(5, 1, 7, 9, -1));
console.log(Math.pow(2.3, 7));
console.log(Math.sqrt(5.77));
console.log(Math.floor(5.77));
console.log(Math.ceil(5.77));
// others


// generates random number between 0 and 1
console.log(Math.random());


// for decimal between 0 and 9 included
let num = Math.floor(Math.random() * 10);
console.log(num);


if(Math.random() < 0.5){
    console.log("hello");
}
else console.log("bye");






