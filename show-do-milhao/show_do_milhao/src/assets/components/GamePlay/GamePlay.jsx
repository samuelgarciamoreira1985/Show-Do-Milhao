// CSS
import "./GamePlay.css"
// JSON
import data_questions from "../../../data/questions.json"
// IMAGENS
import cardshelp from "../../imagens/cards_help.png"
import boardshelp from "../../imagens/boards_help.png"
import guestshelp from "../../imagens/guests_help.png"
import jump1help from "../../imagens/jump1_help.png"
import jump2help from "../../imagens/jump2_help.png"
import jump3help from "../../imagens/jump3_help.png"
import gold from "../../imagens/gold.png"


const GamePlay = () => {

  return (

    <div className="container-gameplay">
      
        <div className="sub-container-gameplay">

            {data_questions && data_questions?.map(optionQuestion => (
            <div className="questions" key={optionQuestion.id_Question}>
                <div className="description-question">
                  <p style={{userSelect:"none"}}>{optionQuestion.question}</p>
                </div>
              
                  <div className="response">
                      <div className="response-index"><span>A</span></div><div className="response-info">
                        <p>{optionQuestion.response_A}</p>
                      </div>
                  </div>
                  <div className="response">
                      <div className="response-index"><span>B</span></div><div className="response-info">
                        <p>{optionQuestion.response_B}</p>
                      </div>
                  </div>
                  <div className="response">
                      <div className="response-index"><span>C</span></div><div className="response-info">
                        <p>{optionQuestion.response_C}</p>
                      </div>
                  </div>
                  <div className="response">
                      <div className="response-index"><span>D</span></div><div className="response-info">
                        <p>{optionQuestion.response_D}</p>
                      </div>
                  </div>
                
            </div>
            ))}

            <div className="help">

                <div className="group-items-help">
                  <h3>AJUDA</h3>
                    <div className="items-1">
                        <div className="items-1-details">
                         <img src={cardshelp} alt="imagem - cartas" />
                          <p>Cartas</p>
                        </div>
                        <div className="items-1-details">
                          <img src={boardshelp} alt="imagem - placas" />
                          <p>Placas</p>
                        </div>
                        <div className="items-1-details">
                          <img src={guestshelp} alt="imagem - convidados" />
                          <p>Convidados</p>
                        </div>
                    </div>

                    <div className="items-2">
                        <div className="items-2-details">
                         <img src={jump1help} alt="imagem - pulo 1" />
                          <p>Pulo 1</p>
                        </div>
                        <div className="items-2-details">
                          <img src={jump2help} alt="imagem - pulo 2" />
                          <p>Pulo 2</p>
                        </div>
                        <div className="items-2-details">
                          <img src={jump3help} alt="imagem - pulo 3" />
                          <p>Pulo 3</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="score-money">

                <div className="score-money-details">
                    <p className="value-money-err">500</p>
                    <img src={gold} alt="imagem - Barra de ouro - Errar" />
                    <p>Errar</p>
                </div>
                <div className="score-money-details">
                    <p className="value-money-stop">1 MIL</p>
                    <img src={gold} alt="imagem - Barra de ouro - Errar" />
                    <p>Parar</p>
                </div>
                <div className="score-money-details">
                    <p className="value-money-correct">2 MIL</p>
                    <img src={gold} alt="imagem - Barra de ouro - Errar" />
                    <p>Acertar</p>
                </div>


            </div>

                <div className="button-stop-game">
                    <button type="button">PARAR</button>
                </div>

        </div>

    </div>

  )

}

export default GamePlay