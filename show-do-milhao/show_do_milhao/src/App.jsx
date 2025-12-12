// REACT
import MainMenu from './assets/components/MainMenu/MainMenu'
import GamePlay from './assets/components/GamePlay/GamePlay'
// CSS
import './App.css'
// Context
import { ContextSettings } from './assets/context/SettingsContext'
import { useContext } from 'react'

function App() {

  const { stages,setStages } = useContext(ContextSettings)

  return (

    <div className='App'>
      {stages === "MENU" && <MainMenu/>}
      {stages === "START" && <GamePlay/>}
    </div>

  )

}

export default App
