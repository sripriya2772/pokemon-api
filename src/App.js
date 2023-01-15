import React, { useEffect, useState } from "react";
import PokemonLogo from "./Components/PokemononLogo";
  
function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);
  
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  
  return (
    <div className="app-container">
      <h1>Pokemons</h1>
  
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon, index) => (
            <PokemonLogo
              id={pokemon.id}
              name={pokemon.name}
              image=
      {pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              
              height={pokemon.height}
              weight={pokemon.weight}
              par1={pokemon.stats[0].stat.name}
              par2={pokemon.stats[1].stat.name}
              par3={pokemon.stats[2].stat.name}
              par4={pokemon.stats[3].stat.name}
              par5={pokemon.stats[4].stat.name}
              par6={pokemon.stats[5].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
              bs3={pokemon.stats[2].base_stat}
              bs4={pokemon.stats[3].base_stat}
              bs5={pokemon.stats[4].base_stat}
              bs6={pokemon.stats[5].base_stat}
            />
          ))}
        </div>
        <button className="load-more" 
          onClick={() => getAllPokemons()}>
          More Pokemons
        </button>
      </div>
    </div>
  );
}
  
export default App;