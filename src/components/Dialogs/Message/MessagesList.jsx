import React from "react";
// import ReactDOM from "react-dom";
import Message from "./Message";

const MessagesList = (props) => {

    let messageElements = props.messages.map(m => <Message message={m.message} id={m.id} date={m.date} />);
    

    return (

        <div className="dialogs__messages__scroll">
            { messageElements }
        </div>

    )
}

export default MessagesList;