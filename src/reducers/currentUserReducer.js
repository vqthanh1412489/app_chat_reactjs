import * as Types from './../constants/ActionTypes';
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

var initialState = currentUser ? {
    user: {
        _id: currentUser._id,
        username: currentUser.username,
        name: currentUser.name,
    },
    token: null
} : {
    user: {
        _id: null,
        username: null,
        name: null,
    },
    token: null
}

const currentUserReducer = (state = initialState, action) => {
    var user, token;
    switch (action.type) {
        case Types.GET_CURRENTUSER_SIGNUP:
            user = action.data.user;
            token = action.data.token;
            state = {
                user: {
                    _id: user._id,
                    username: user.username,
                    name: user.name
                },
                token
            }
            localStorage.setItem('currentUser', JSON.stringify(state.user));
            localStorage.setItem('token', state.token);
            return { ...state }

        case Types.GET_CURRENTUSER_SIGNIN:
            user = action.data.user;
            token = action.data.token;
            state = {
                user: {
                    _id: user._id,
                    username: user.username,
                    name: user.name
                },
                token
            }
            localStorage.setItem('currentUser', JSON.stringify(state.user));
            localStorage.setItem('token', state.token);
            return { ...state }
        case Types.CHECK_TOKEN:
            user = action.data.user;
            token = action.data.token;
            state = {
                user: {
                    _id: user._id,
                    username: user.username,
                    name: user.name
                },
                token
            }
            localStorage.setItem('currentUser', JSON.stringify(state.user));
            localStorage.setItem('token', state.token);
            return { ...state }
        default: return { ...state };
    }
};

export default currentUserReducer;

