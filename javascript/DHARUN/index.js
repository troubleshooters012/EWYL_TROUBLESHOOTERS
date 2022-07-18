const pokedex=document.getElementById("pokedex");
console.log(pokedex);
const fetchPokemon=()=>{
  console.log("fetchpokemon start");
const promises= [];
  for(let i=1;i<=150;i++){
  const url=`https://pokeapi.co/api/v2/pokemon/${i}`;
  promises.push(fetch(url).then((results)=>results.json()))
  }
  Promise.all(promises).then(results=>{
    const pokemon=results.map((data)=>({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map((type)=>type.type.name).join(', ')
    }));
    displayPokemon(pokemon);
    
  });
  console.log("fetchpokemon end ");
};
const displayPokemon=(pokemon)=>{
      console.log("display start");
  console.log(pokemon);
  const pokemonHTMLString=pokemon.map(pokeman=>`
  <li class="card">
      <img class="card-image" src="${pokeman.image}"/>
      <h2 class="card-subtitle">type${pokeman.id}.${pokeman.name}</h2>
      <p>type:${pokeman.type}<p>
    </li>
    `
    )
    .join(''); 
  pokedex.innerHTML=pokemonHTMLString;
  console.log("display end");
};


fetchPokemon();

  // fetch(url)
//   .then((result)=>{
//     return result.json();
//   }).then((data)=>{
//     console.log(data);
//     for(let i=1;i<=150;i++)
//     const pokemon={
//       name:data.name,
//       id:data.id,
//       images:data.sprites['front-default'],
//       type:data.types.map((type)=>type.type.name).join(', ')
//     };
//     console.log(pokemon);
//   });
// }
// fetchPokemon();