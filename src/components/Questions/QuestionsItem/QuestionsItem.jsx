import React from "react";


const QuestionsItems = (props) => {
    return (
    <div className="questions__item">{props.text}</div>
    )
}


const QuestionsItem = (props) => {
    
    let questionsElements = props.questionsData.map(q => <QuestionsItems  text={q.text} id={q.id}/> );
    
    return (
        <div className="questions__box">
            { questionsElements }
        </div>
    )
}

export default QuestionsItem;