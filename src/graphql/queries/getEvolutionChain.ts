import { gql } from "@apollo/client";

export const GET_EVOLUTION_CHAIN = gql`
  query GetEvolutionChain($evolutionChainId: Int!) {
    evolution_chain: pokemon_v2_pokemonspecies(
      where: {evolution_chain_id: {_eq: $evolutionChainId}}
      order_by: {order: asc}
    ) {
      id
      order
      evolution_chain_id
      evolves_from_species_id

      korean_name: pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 3}}) {
        name
      }

      english_name: pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
        name
      }

      pokemon_data: pokemon_v2_pokemons(limit: 1, order_by: {id: asc}) {
        id
        image: pokemon_v2_pokemonsprites {
          sprites
        }

        types: pokemon_v2_pokemontypes {
          slot
          type: pokemon_v2_type {
            korean: pokemon_v2_typenames(where: {language_id: {_eq: 3}}) {
              name
            }
          }
        }
      }
    }
  }
`;
