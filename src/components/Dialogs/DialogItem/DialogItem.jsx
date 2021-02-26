import React from "react";
import { NavLink } from "react-router-dom";
// import DialogsAdd from "./DialogsAdd/DialogsAdd";

const DialogItem = (props) => {
    let path = "/dialogs/user/" + props.id

    return (
        <div>
            <div class="d-items__item">
                <div className="d-items__item__ico">
                    <img src="/img/noava.png" />
                </div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>

    )
}

export default DialogItem