import './App.css'
import { useGetPokemonDetailKoreanQuery } from './generated/graphql'



function App() {
  // const { data: pokemonDetailData} = useQuery(GET_POKEMON_DETAIL, {
  //   variables: { pokemonId: 5 }
  // })


  // const evolutionChainId = pokemonDetailData?.pokemon?.[0]?.specy?.evolution?.[0]?.evolution_chain_id;
  // console.log("evolutionChainId", evolutionChainId)


  // const { data: evolutionData } = useQuery(GET_EVOLUTION_CHAIN, {
  //    variables: { evolutionChainId },
  //    skip: !evolutionChainId // evolutionChainId가 없으면 쿼리 스킵
  //  });

  // console.log("evolutionData", evolutionData)

  const { data: pokemonDetailData} = useGetPokemonDetailKoreanQuery({
    variables: {pokemonId: 5},
    errorPolicy: "all"
  })
  console.log("pokemonDetailData", pokemonDetailData)



  return (
    <div className="text-5xl text-red-300"> pokelog
    </div>
  )
}

export default App
