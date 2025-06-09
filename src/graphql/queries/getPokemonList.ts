import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query GetMultiplePokemonKorean($limit: Int = 10) {
    pokemon: pokemon_v2_pokemon(limit: $limit, order_by: {id: asc}) {
      id

      pokemon_v2_pokemonsprites {
        sprites
        }

      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 3}}) {
          name
        }
      }

      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          pokemon_v2_typenames(where: {language_id: {_eq: 3}}) {
            name
          }
        }
      }
    }
  }
`;
