import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import PulseLoader from "react-spinners/PulseLoader";


function PokemonPage() {

  const params = useParams()
const navigate = useNavigate()
  // 1. Crear el estado que almacenará la data externa
  const [pokemonDetails, setPokemonDetails ] = useState(null)

  // 2. componentDidMount para llamar a la API
  useEffect(()=>{
    getData()
  }, [params.pokeName])//componenteDidMount y tb como componentDidUpdate de cambios en params

  const getData = async () => {
    try {
      //3. la llamada con fetch a la api
      const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeName}`)
      const data = await response.json()
      console.log(data)
    // almacenar data en el estado
      setPokemonDetails(data)


      // const responseEvolution = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${data.id}`)
      // const dataEvolution = await responseEvolution.json()
      // console.log(dataEvolution)
    
    } catch (error) {
      console.log(error)

      //enviamos al usuario a una página específica de error
      navigate("/error")
    }
  }

// gestión del loading
if(pokemonDetails===null){
  return <div><PulseLoader /></div>
}
  return (
    <div>
      {/*Renderizar la data*/}
      <h4> Detalles del pokemon</h4>
      <div>
        <h3>{pokemonDetails.name}</h3>
        <img src={pokemonDetails.sprites.front_default} alt="" />
      </div>



      </div>
  )
}

export default PokemonPage