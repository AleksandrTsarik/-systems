import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './style/main.sass'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Questions from './components/Questions/Questions';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />  
        <div className="app-content">
          <Navbar />   
          <div className="content">
            <Route path="/dialogs" render={ () => <Dialogs 
              dispatch={props.dispatch}
              dialogsData={props.state.dialogsData}
              messagesData={props.state.messagesPage.messagesData}
              newMessageText={props.state.messagesPage.newMessageText}
            /> } />
            <Route path="/questions" render={ () => <Questions 
              dispatch={props.dispatch}
              questionsData={props.state.questionsPage.questionsData}
              newQuestionsText={props.state.questionsPage.newQuestionsText}
            /> } />
          </div>
            
</div>
      </div>
    </BrowserRouter>
  )
}

export default App;