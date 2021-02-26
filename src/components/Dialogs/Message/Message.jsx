import React from "react";
// import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const Message = (props) => {
    return <div className="messages__item">{props.message}</div>
}

export default Message