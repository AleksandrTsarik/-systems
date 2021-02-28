import React from "react";
import { NavLink } from "react-router-dom";
// import DialogsAdd from "./DialogsAdd/DialogsAdd";

const DialogItem = (props) => {
    let path = "/dialogs/user/" + props.id;
    let srcImg = '';
    let css = '';
    if(props.ava !== '') { 
        srcImg = props.ava
    } else {
        srcImg = '/img/noava.png';
        css = 'opacity: 0.5;'
    } 
    
    const timeConverter = (UNIX_timestamp) => {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();   
        let time = date + '.' + month + '.' + year;
        return time;
    }   

    let lastMessage = 'Диалог пуст';   
    let lastMessageDate = '';     
    if(props.mess.length) {
        let sortedMess = props.mess.sort(function(x, y){
            return x.date - y.date;
        });         
        lastMessage = sortedMess.reverse()[0].message;
        lastMessageDate = timeConverter(sortedMess.reverse()[0].date);
    }

    return (
        <div>
            <div className="d-items__item">                
                <NavLink to={path} className="d-items__item-box">
                    <div className="d-items__item__ico">
                        <img src={srcImg} />
                    </div>
                    <div className="d-items__item-box-info">
                        <span>{props.name}</span><br />
                        <i>{lastMessage}</i>
                        <em>{lastMessageDate}</em>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default DialogItem