import React from "react";
// import ReactDOM from "react-dom";
import {timeConverter} from './../../../redux/state';
//import { NavLink } from "react-router-dom";

const Message = (props) => {

    // const timeConverter = (UNIX_timestamp) => {
    //     let a = new Date(UNIX_timestamp * 1000);
    //     let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    //     let year = a.getFullYear();
    //     let month = months[a.getMonth()];
    //     let date = a.getDate();
    //     let hour = a.getHours();
    //     let min = a.getMinutes();
    //     let sec = a.getSeconds();
    //     let time = date + '.' + month + '.' + year + ' ' + hour + ':' + min;
    //     return time;
    // }

    return (
        <div className="messages__item" date={props.date}>
            {props.message}
            <span>{timeConverter(props.date)}</span>
        </div>
    )
}

export default Message