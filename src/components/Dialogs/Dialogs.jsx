import React from "react";
// import ReactDOM from "react-dom";
//import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import DialogsAdd from "./DialogsAdd/DialogsAdd";
import Message from "./Message/Message";
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesList from "./Message/MessagesList";



const Dialogs = (props) => {

    //let dialogElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />); 
    //let messageElements = props.messagesData.map(m => <Message message={m.message} id={m.id} />);
    
    let dialogElements = [];   
    let dialogs = {}; 

    props.dialogsData.forEach((d) => {
        dialogs[d.id] = [];
        props.messagesData.forEach((m) => {            
            if(d.id == m.user_id) {
                dialogs[d.id].push(m);
            }                
        });        
        
        // Получили список диалогов
        dialogElements.push(
            <DialogItem name={d.name} id={d.id} ava={d.ava} mess={dialogs[d.id]} />
        );        
        return dialogElements;
    });  
    

    let messageElements = [];       
    for (let e in dialogs) {  
        let path = "/dialogs/user/" + e;
        messageElements.push(             
            <Route path={path} render={ () => <MessagesList messages={dialogs[e]} /> } />            
        ) 
    } 

    return (
        <BrowserRouter>
        <div className="dialogs">
            <div className="dialogs__inner">
                <div className="dialogs__d-items">
                    <div className="dialogs__scroll__item">
                        { dialogElements }
                    </div>                    
                </div>
                <div className="dialogs__messages">                    
                    { messageElements } 
                </div>
            </div>

            <DialogsAdd
                dispatch={props.dispatch}
                newMessageText={props.newMessageText}               
                />
        </div>
        </BrowserRouter>
    )
}

export default Dialogs;