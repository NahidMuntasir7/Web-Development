

// function hello(){
//     console.log("hello");
// }

// function mello(){
//     console.log("mello");
// }

// setTimeout(hello, 2*1000);
// setTimeout(mello, 1*1000);



// this will also work

// setTimeout(function(){  
//     console.log("hello");
// }, 2*1000);

// setTimeout(function(){  
//     console.log("mello");
// }, 1*1000);


// print 1 to 10 but with delay of 1 sec after each number gets printed


// for(let i = 1; i <= 10; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i * 1000); // 1 2 3 4 5 6 7 8 9 10
// }

// for(let i = 10; i >= 1; i--){
//     setTimeout(function(){
//         console.log(i);
//     }, i * 500);  // 1 2 3 4 5 6 7 8 9 10
// }

// for(let i = 1; i <= 10; i++){
//     setTimeout(function(){
//         console.log(11 - i);
//     }, i * 500); // 10 9 8 7 6 5 4 3 2 1 
// }


for(let i = 1; i <= 10; i++){
    setTimeout(function(){
        console.log(Math.random());
    }, i * 500); 
}







