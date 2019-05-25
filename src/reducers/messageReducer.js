import { SET_MESSAGES } from './../constants/ActionTypes';

const initialState = [];

const message = (state = initialState, action) => {
    switch(action.type){
        case SET_MESSAGES:
            return action.payload;
        default: return state;
    }
};

export default message;