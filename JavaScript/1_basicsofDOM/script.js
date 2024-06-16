// console.log("hello bhai");
// let a = 6;
// console.log(a*a);




// Element Selection



// let x = document.querySelector("h1");
// console.log(x);

// let x = document.querySelectorAll("h1"); // multiple
// console.log(x);

// let x = document.querySelectorAll(".yes"); // with class
// console.log(x);

// let x = document.querySelector("h2"); 
// x.style.color = "red";
// x.style.fontFamily = "Gill Sans";

// let y = document.querySelector("h1"); 
// y.style.backgroundColor = "green";
// y.innerHTML = "holaaaaa";

// setTimeout(function(){
//     y.innerHTML = "holaaaaa";
// }, 2000);

// setTimeout(function(){
//     x.style.color = "red";
//     x.style.fontFamily = "Gill Sans";
// }, 4000);





// Event Listener

// let x = document.querySelector("#ele1");
// let x = document.getElementById("ele1"); // or
// x.innerHTML = "BONK";
// x.style.color = "red";
// x.style.backgroundColor = "yellow";


let x = document.getElementById("ele1"); // pikachu
let y = document.getElementById("ele2"); // charizard
let z = document.getElementById("ele3"); // mewtwo

x.addEventListener("click", function(){
    // x.innerHTML = "BONK";
    x.style.color = "red";
    x.style.backgroundColor = "yellow"; 
});
x.addEventListener("mouseleave", function(){
    // x.innerHTML = "BONK";
    x.style.color = "black";
    x.style.backgroundColor = "white"; 
});


y.addEventListener("mouseenter", function(){ 
    y.style.color = "white";
    y.style.backgroundColor = "orange"; 
});
y.addEventListener("mouseleave", function(){ 
    y.style.color = "black";
    y.style.backgroundColor = "white"; 
});


y.addEventListener("click", function(){
    z.style.color = "white";
    z.style.backgroundColor = "purple"; 
});

z.addEventListener("click", function(){
    x.style.color = "white";
    x.style.backgroundColor = "green"; 
    x.innerHTML = "Bulbasaur";
});



 







