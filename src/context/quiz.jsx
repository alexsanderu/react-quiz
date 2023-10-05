import { createContext, useReducer } from "react";
import questions from '../data/questions'
import PropTypes from 'prop-types';

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
}

const quizReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_STATE":
            return state
            
            default:
                return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider>{children}</QuizContext.Provider>;
} 

QuizProvider.propTypes = {
    children: PropTypes.func
}