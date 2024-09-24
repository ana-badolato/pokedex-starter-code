import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PokemonPage from './pages/pokemonPage'

function App() {

  return (
    <>

      <Navbar /> 

      <div className='app-container'>

        <Sidebar />

        <div className='page'>
          <Routes>

            <Route path={"/"} element={ <Home />}/>
            <Route path={"/pokemon-details/:pokeName"} element={ <PokemonPage />}/>



            {/* error handling routes */}
            <Route path={"*"} element={ <NotFound />}/>

          </Routes>
        </div>
      
      </div>  

    </>
  )
}

export default App
