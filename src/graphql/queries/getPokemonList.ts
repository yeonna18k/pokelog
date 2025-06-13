import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query GetMultiplePokemonKorean($limit: Int = 10) {
    pokemon: pokemon_v2_pokemon(limit: $limit, order_by: {id: asc}) {
      id

      image: pokemon_v2_pokemonsprites {
        sprites
        }

      specy: pokemon_v2_pokemonspecy {
        korean: pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 3}}) {
          name
        }
      }

      types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
              korean: pokemon_v2_typenames(where: {language_id: {_eq: 3}}) {
            name
          }
        }
      }
    }
  }
`;
