import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query samplePokeAPIquery {
    gen3_species: pokemon_v2_pokemonspecies(
      where: {pokemon_v2_generation: {name: {_eq: "generation-iii"}}}
      order_by: {id: asc}
    ) {
      name
      id
    }
    generations: pokemon_v2_generation {
      name
      pokemon_species: pokemon_v2_pokemonspecies_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
