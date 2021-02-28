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

    console.log(props.mess)

    return (
        <div>
            <div className="d-items__item">
                
                <NavLink to={path} className="d-items__item-box">
                    <div className="d-items__item__ico">
                        <img src={srcImg} />
                    </div>
                    <div className="d-items__item-box-info">
                     <span>{props.name}</span><br />
                        <i>Последнее сообщение</i>
                    </div>
                </NavLink>
            </div>
        </div>

    )
}

export default DialogItem