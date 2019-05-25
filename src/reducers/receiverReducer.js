import { SET_RECEIVER } from './../constants/ActionTypes';
var defaultValue = localStorage.getItem('receiver');
var initialState = defaultValue ? defaultValue : null;

const receiverReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECEIVER:
            localStorage.setItem('receiver', action.payload);
            return action.payload;
        default: return { ...state };
    }
};

export default receiverReducer;

