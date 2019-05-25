import { SEND_USERNAME } from './../constants/ActionTypes';

const initialState = null;

const usernameReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_USERNAME:
            return action.payload;
        default: return state;
    }
};

export default usernameReducer;