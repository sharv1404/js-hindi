const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros) // concat gives new array after combining other arrays
// console.log(allHeros);

// const all_new_heros = [...dc_heros, ...marvel_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

console.log(Array.isArray("vampire"));
console.log(Array.from("vampire"));
console.log(Array.from({name: "Demon"})); // intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
