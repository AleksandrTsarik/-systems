import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'


const DialogsAdd = (props) => {

    let newPostElement = React.createRef();

    let addMessage = () => {
        //let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());        
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className="dialogs__add">
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newMessageText} />
            <button onClick={addMessage}>Отправить</button>
            <button>Удалить</button>
        </div>
    )
}

export default DialogsAdd