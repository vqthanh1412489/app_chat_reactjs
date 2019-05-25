import { SEND_USERNAME, SEND_CONVERSATION, SET_TYPING } from '../constants/ActionTypes'

const sentUsernameMiddleware = store => next => action => {
    const state = store.getState();
    if (action.type === SEND_USERNAME) {
        const socket = state.socket.socket;
        socket.emit('client-sent-username', action.payload);
    }

    if (action.type === SEND_CONVERSATION) {
        const socket = state.socket.socket;
        socket.emit('client-sent-conversation', action.payload);
    }
    if (action.type === SET_TYPING) {
        const socket = state.socket.socket;
        socket.emit('client-sent-typing', action.payload);
    }
    next(action);
}

export default sentUsernameMiddleware;
