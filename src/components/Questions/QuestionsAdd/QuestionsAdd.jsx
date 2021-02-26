import React from "react";
import { addQuestionsActionCreator, updateNewPostQuestionsActionCreator } from '../../../redux/state'


const QuestionsAdd = (props) => {

    let newPostElement = React.createRef();

    let addMessage = () => {
        let text = newPostElement.current.value;
        props.dispatch(addQuestionsActionCreator());
    }
    let onQuestionsChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostQuestionsActionCreator(text));
    }

    return (
        <div>
            <textarea onChange={onQuestionsChange} ref={newPostElement} value={props.newQuestionsText} />
            <button onClick={addMessage}>Отправить</button>
        </div>

    )
}

export default QuestionsAdd