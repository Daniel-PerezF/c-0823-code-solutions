async function logUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Error:', response.status);
    }
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.error('Error:', err.message);
  }
}
logUsers();

async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/3');
    if (!response.ok) {
      throw new Error('Error:', response.status);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (err) {
    console.error('Error:', err.message);
  }
}
getPokemon();
