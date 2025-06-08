import { useQuery } from '@apollo/client'
import './App.css'
import { GET_POKEMON_LIST } from './graphql/queries/getPokemonsList'


function App() {
  const { data} = useQuery(GET_POKEMON_LIST)
  console.log(data)


  return (
    <div className="text-5xl text-red-300"> pokelog
    </div>
  )
}

export default App
