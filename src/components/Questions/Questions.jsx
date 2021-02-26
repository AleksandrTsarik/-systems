import React from "react";
import QuestionsAdd from "./QuestionsAdd/QuestionsAdd";
import QuestionsItem from "./QuestionsItem/QuestionsItem";

const Questions = (props) => {

    return (
        <div className="question">
            <div className="question__inner">
                <h2>Вопросы</h2>
                <div className="question__inner__scroll">
                    <QuestionsItem questionsData={props.questionsData} />
                </div>
            </div>
            <div className="question__add">
                <QuestionsAdd 
                    dispatch={props.dispatch}
                    newQuestionsText={props.newQuestionsText}
                    
                />
            </div>
        </div>
    )   
}

export default Questions;   