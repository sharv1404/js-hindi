const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros) // concat gives new array after combining other arrays
// console.log(allHeros);

const all_new_heros = [...dc_heros, ...marvel_heros]
console.log(all_new_heros);
