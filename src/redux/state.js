const ADD_POST = 'ADD-POST';
const ADD_QUSTIONS = 'ADD-QUSTIONS';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_QUSTIONS_TEXT = 'UPDATE-NEW-QUSTIONS-TEXT';

let store = { 
  _state: {
    dialogsData: [
      {id: 1, name: 'Саша', ava: '/img/Sasha.jpeg'},
      {id: 2, name: 'Женя', ava: '/img/Jenya.jpg'},
      {id: 3, name: 'Дима', ava: '/img/Dima.jpg'},
      {id: 4, name: 'Максим', ava: ''},
      {id: 5, name: 'Запидрищенко Лариса', ava: ''},
      {id: 6, name: 'Евлампий', ava: ''},
      {id: 7, name: 'Иннокентий Шниперсон', ava: ''}
    ],

    messagesPage: {
      messagesData: [
        {id: 1, message: 'Hi', user_id: "1", date: "1614470216"},
        {id: 2, message: 'Hello', user_id: "1", date: "1614470336"},
        {id: 3, message: 'yo', user_id: "1", date: "1614472436"},
        {id: 4, message: 'Привет', user_id: "2", date: "1614472676"},
        {id: 5, message: 'Как дела?', user_id: "2", date: "1614472676"},
        {id: 6, message: 'до встречи', user_id: "2", date: "1614472797"}, 
        {id: 7, message: 'lorem1', user_id: "3", date: "1614473697"},
        {id: 8, message: 'lorem1', user_id: "3", date: "1614473877"},
        {id: 9, message: 'lorem1', user_id: "3", date: "1614473997"},  
      ],
      newMessageText: 'Напиши что ни будь'
    },
    
    questionsPage: {
      questionsData: [
          {id: 1, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis praesentium voluptatibus explicabo perspiciatis in.'},
          {id: 2, text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, velit.'},
          {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta officia dolor nemo cum ex error rerum dolores explicabo.'},
          {id: 4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis praesentium voluptatibus explicabo perspiciatis in.'}
        ],
      newQuestionsText: 'опишите проблему'
    }
  },
  _callSubscriber() {
    console.log('hi hi h ih ihi h')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch (action) {
    if (action.type === "ADD-POST") {
      let currentUrl = window.location.href;        
      let arrayId = currentUrl.split('/').reverse();
      let dateMessage = Math.floor(Date.now() / 1000);
      let newMessage = {
        id: this._state.messagesPage.messagesData.length+1,
        message: this._state.messagesPage.newMessageText,
        user_id: arrayId[0],
        date: dateMessage
      };  
      if(newMessage.message !== '') {      
        this._state.messagesPage.messagesData.push(newMessage);
        this._callSubscriber(this._state);
        this._state.messagesPage.newMessageText = '';   
      }      
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-QUSTIONS") {
      let newQuestions = {
        id: this._state.questionsPage.questionsData.length+1,
        text: this._state.questionsPage.newQuestionsText
      };
      if(newQuestions.text !== '') {
        this._state.questionsPage.questionsData.push(newQuestions);
        this._callSubscriber(this._state);
        this._state.questionsPage.newQuestionsText = '';
      }      
    } else if (action.type === "UPDATE-NEW-QUSTIONS-TEXT") {
      this._state.questionsPage.newQuestionsText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
export const addQuestionsActionCreator = () => ({type: 'ADD-QUSTIONS'});
export const updateNewPostQuestionsActionCreator = (text) => ({type: 'UPDATE-NEW-QUSTIONS-TEXT', newText: text});

export default store;
window.store = store;
