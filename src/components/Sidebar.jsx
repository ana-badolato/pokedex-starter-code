import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


//en este ocmponente haremos una llamada externa para buscar la data
//1. de donde viene la data? API
//2. Cómo nos anclamos a esa data? fetch
//3. En qué momento hacemos la operación? componentDidMount
//4. Una vez que recibimos la data, qué hacemos con ella? tenemos que almacenarla en un estado



function Sidebar() {
  
  const [ allPokemon, setAllPokemon ] = useState(null)

   useEffect(()=>{

      console.log("patata");
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response)=>{
        return response.json()//lamada para que la data se traduzca correctamente. Es una llamada interna a JS
      })
      .then((data)=>{
        console.log(data)
        setAllPokemon(data.results)
      })
      .catch((err)=>{
        console.log(err)
      })


   }, [])//[] necesario porque sino puede causar ocnflicto

//clausula de guardia apra las llamadas externas (efecto de carga)

if(allPokemon===null){
   //usar un spinner por ejemplo
   return <h3>...buscando pokemons</h3>
}//solo cuando la info esté lista la pintamos

  return (
    <nav className="sidebar">
      
      <h5>Elige un pokemon</h5>

      {allPokemon.map((eachPokemon)=>{
        return(
        <Link to={`/pokemon-details/${eachPokemon.name}`} key={eachPokemon.name}>{eachPokemon.name}</Link>
      )
      })}

    </nav>
  )
}

export default Sidebar