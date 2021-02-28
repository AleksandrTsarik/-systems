import React from "react";
// import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const Message = (props) => {

    const timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min;
        return time;
    }

    return (
        <div className="messages__item" date={props.date}>
            {props.message}
            <span>{timeConverter(props.date)}</span>
        </div>
    )
}

export default Message