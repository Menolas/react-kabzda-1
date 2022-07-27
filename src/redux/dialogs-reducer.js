const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your IT Kama Sutra' },
    { id: 3, message: 'YoYo' },
    { id: 4, message: 'Hi' },
    { id: 5, message: 'Hi' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messages.push({ id: 6, message: body });
      state.newMessageBody = '';
      return state;
    
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (text) => (
  { type: UPDATE_NEW_MESSAGE_BODY, body: text });
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
