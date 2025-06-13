import { useGetMultiplePokemonKoreanQuery } from "../generated/graphql";

export const MainPage = () => {
  const { data} = useGetMultiplePokemonKoreanQuery()
  const pokemons = data?.pokemon[0]
  console.log(pokemons)
  return (
    <div>
      <div><img/></div>
    </div>
  );
};
