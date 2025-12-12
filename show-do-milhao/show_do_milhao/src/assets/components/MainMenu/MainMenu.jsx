// REACT
import { useContext } from 'react'
import GamePlay from "../GamePlay/GamePlay"
// CSS
import "./MainMenu.css"
// Context
import { ContextSettings } from '../../context/SettingsContext'
// IMAGENS
import Main_Menu from "../../imagens/imgMainMenu.png"
import { useState } from "react"

const MainMenu = () => {

    const { stages,setStages } = useContext(ContextSettings)

    const initialGame = () => {
        setStages("START")
    }

  return (

    <div className="container-MainMenu">
        <div className="group-mainmenu">
            <img src={Main_Menu} alt="imagem da capa do menu" />
            <p>História do Mundo</p>
            <button type="button" onClick={() => initialGame()}>INICIAR JOGO</button>
            
        </div>
     
       
    </div>

  )

}

export default MainMenu