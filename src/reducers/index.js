import { combineReducers } from 'redux';
import currentUser from './currentUserReducer';
import isLoged from './isLoged';
import rooms from './roomsReducer';
import username from './usernameReducer';
import socket from './socketReducer';
import conversation from './conversationReducer';
import messages from './messageReducer';
import receiver from './receiverReducer';
import typing from './typingReducer';

const appReducers = combineReducers({
    currentUser,
    isLoged,
    rooms,
    username,
    socket,
    conversation, // create conversation on server
    messages,
    receiver,
    typing
});

export default appReducers;