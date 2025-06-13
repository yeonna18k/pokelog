import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL = gql`
  query GetPokemonDetailKorean($pokemonId: Int!) {
    pokemon: pokemon_v2_pokemon(limit: 1, where: {id: {_eq: $pokemonId}}) {
      id
      height
      weight
      base_experience



      specy: pokemon_v2_pokemonspecy {
        evolution: pokemon_v2_pokemonspecies(order_by: {order: asc}) {
          id
          name
          order
          evolution_chain_id
          evolves_from_species_id
        }

        korean: pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 3}}) {
          name
          genus
        }

        flavor_text: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 3}}, order_by: {version_id: desc}, limit: 1) {
          version_id
          flavor_text
        }
      }

      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          korean: pokemon_v2_abilitynames(where: {language_id: {_eq: 3}}) {
            name
          }
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
