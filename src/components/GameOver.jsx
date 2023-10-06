import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import congrats from "../img/congrats.png";
import "./GameOver.css";


const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        <img src={congrats} alt="fim"/>
    </div>
  )
}

export default GameOver