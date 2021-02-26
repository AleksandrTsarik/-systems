import React from 'react';
import ReactDOM from 'react-dom';
// import { renderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import './index.css';
import App from './App';
// import {addPost, updateNewPostText, updateNewQuestionsText} from './redux/state';
// import {addQuestions} from './redux/state';



let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App  state={state} 
            dispatch={store.dispatch.bind(store)} 
            />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);


reportWebVitals();

