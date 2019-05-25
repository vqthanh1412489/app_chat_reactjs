import * as Types from './../constants/ActionTypes';
import { signup, login, checkToken, getIdWithUsername } from '../services/UserServices';

import {
    OPEN_WEBSOCKET,
    UPDATE_SOCKET_OBJECT,
    GET_ROOMS,
    SEND_USERNAME,
    SEND_CONVERSATION,
    SET_MESSAGES,
    SET_TYPING,
    SET_RECEIVER,


} from '../constants/ActionTypes';

export const actGetCurrentUserSignUpRequest = (username, password, name) => {
    return dispatch => {
        return signup(username, password, name)
            .then(res => {
                if (!res.data.err) {
                    dispatch(actGetCurrentUserSignUp(res.data));
                    dispatch(actToogleLoged(true));
                } else {
                    alert(res.data.err);
                }

            })
            .catch(err => console.log(err));
    };
}

export const actGetCurrentUserSignUp = (data) => {
    return {
        type: Types.GET_CURRENTUSER_SIGNUP,
        data
    }
}
export const actGetCurrentUserLogInRequest = (username, password) => {
    return dispatch => {
        return login(username, password)
            .then(res => {
                if (!res.data.err) {
                    dispatch(actGetCurrentUserLogIn(res.data));
                    dispatch(actToogleLoged(true));
                } else {
                    alert(res.data.err);
                }

            })
            .catch(err => console.log(err));
    };
}

export const actGetCurrentUserLogIn = (data) => {
    return {
        type: Types.GET_CURRENTUSER_SIGNIN,
        data
    }
}

export const actCheckTokenRequest = () => {
    return dispatch => {
        return checkToken()
            .then(res => {
                if (!res.data.err) {
                    dispatch(actCheckToken(res.data));
                    dispatch(actToogleLoged(true));
                } else {
                    alert(res.data.err);
                }
            })
            .catch(err => console.log(err));
    };
}

export const actCheckToken = (data) => {
    return {
        type: Types.CHECK_TOKEN,
        data
    }
}

export const actGetIdRequest = (username) => {
    return dispatch => {
        return getIdWithUsername(username)
            .then(res => {
                if (!res.data.err) {
                    dispatch(actGetId(res.data));
                } else {
                    alert(res.data.err);
                }
            })
            .catch(err => console.log(err));
    };
}

export const actGetId = (id) => {
    return {
        type: SET_RECEIVER,
        payload: id
    }
}

export const actToogleLoged = (value) => {
    return {
        type: Types.TOGGLE_LOGGED,
        value
    }
}

export const openWebsocket = (endpoint) => {
    return {
        type: OPEN_WEBSOCKET,
        payload: endpoint
    }
}

export const updateSocketObject = (socket) => {
    return {
        type: UPDATE_SOCKET_OBJECT,
        payload: socket
    }
}

export const getRooms = (rooms) => {
    return {
        type: GET_ROOMS,
        payload: rooms
    }
}

export const actSendUsername = (username) => {
    return {
        type: SEND_USERNAME,
        payload: username
    }
}
export const actSendConversation = (sentUser, receiverUser) => {
    return {
        type: SEND_CONVERSATION,
        payload: {
            sentUser, receiverUser
        }
    }
}
export const actSetMessage = (messages) => {
    return {
        type: SET_MESSAGES,
        payload: messages
    }
}
export const actSetTyping = (content, sentUser, receiverUser) => {
    return {
        type: SET_TYPING,
        payload: {
            content, sentUser, receiverUser
        }
    }
}



