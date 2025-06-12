import { useParams } from "react-router-dom";
import { useGetPokemonDetailKoreanQuery } from "../generated/graphql";

export const PokemonDetailPage = () => {
  const { id } = useParams();
  const pokemonId = Number(id);

  const { data: pokemon} = useGetPokemonDetailKoreanQuery({
    variables: {pokemonId},
    errorPolicy: "all",
  })
  console.log("pokemonDetailData", pokemon)

  return (
    <div>
      Pokemon : {pokemon?.pokemon[0]?.specy?.name[0].name}
    </div>
  );
};
