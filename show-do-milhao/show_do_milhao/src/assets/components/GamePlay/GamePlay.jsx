// CSS
import "./GamePlay.css"

const GamePlay = () => {

  return (

    <div className="container-gameplay">
      
        <div className="sub-container-gameplay">

            <div className="questions">
                <div className="description-question">
                  <p>PERGUNTA</p>
                </div>
                <div className="response">
                    <div className="response-index"><span>A</span></div><div className="response-info">
                      <p>RESPOSTA 1</p>
                    </div>
                </div>
                <div className="response">
                    <div className="response-index"><span>B</span></div><div className="response-info">
                      <p>RESPOSTA 2</p>
                    </div>
                </div>
                <div className="response">
                    <div className="response-index"><span>C</span></div><div className="response-info">
                      <p>RESPOSTA 3</p>
                    </div>
                </div>
                <div className="response">
                    <div className="response-index"><span>D</span></div><div className="response-info">
                      <p>RESPOSTA 4</p>
                    </div>
                </div>
            </div>

            <div className="help">

            </div>

        </div>

    </div>

  )

}

export default GamePlay