// var h = document.querySelector("h1");
// h.innerHTML = "goodbye";



// var main = document.getElementById("main");
// main.innerHTML = "goodbye";
// main.innerHTML = "<h1>Hi</h1>";


// var main = document.getElementById("main");
// var s = "";
// for(let i = 1; i <= 4; i++){
//     s += "<h1>Goodbye</h1>";
// }
// main.innerHTML = s;






let arr = ["https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
"https://assets.pokemon.com/assets/cms2/img/pokedex/full//149.png",
"https://img.pokemondb.net/artwork/large/riolu.jpg",
"https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png",
"https://upload.wikimedia.org/wikipedia/en/2/22/Pok%C3%A9mon_Jigglypuff_art.png",
"https://upload.wikimedia.org/wikipedia/en/3/34/Raichu.png"];



let main = document.getElementById("main");
let s = "";
for(let i = 1; i <= 56; i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;