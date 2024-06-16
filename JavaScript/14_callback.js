// a function that is passed inside a function 

function product(a, b, c){
    return a * b * c;
}
console.log(product(1, 2, 3));


// function fun(x, y){
//     console.log(x - y);
// }

// fun(product(2, 3, 4), 7); // 17


function fun(x, y){
    let a = x(2, 3, 4);
    console.log(a - y);
}

fun(product, 7); // 17
