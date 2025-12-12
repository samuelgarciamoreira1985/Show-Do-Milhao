// CSS
import "./GamePlay.css"
// JSON
import data_questions from "../../../data/questions.json"

const GamePlay = () => {

  return (

    <div className="container-gameplay">
      
        <div className="sub-container-gameplay">

            {data_questions && data_questions?.map(optionQuestion => (
            <div className="questions" key={optionQuestion.id_Question}>
                <div className="description-question">
                  <p>{optionQuestion.question}</p>
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

            </div>

        </div>

    </div>

  )

}

export default GamePlay