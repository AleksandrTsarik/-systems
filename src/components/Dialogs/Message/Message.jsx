import React from "react";
import {timeConverter} from './../../../redux/state';

const Message = (props) => {

    return (
        <div className="messages__item" date={props.date}>
            {props.message}
            <span>{timeConverter(props.date)}</span>
        </div>
    )
}

export default Message