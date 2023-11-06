async function logUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.error('Error:', err);
  }
}
logUsers();

async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/3');
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (err) {
    console.error('Error:', err);
  }
}
getPokemon();
