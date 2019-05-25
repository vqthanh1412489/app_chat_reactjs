import { SET_TYPING } from './../constants/ActionTypes';

const initialState = {
    content: '',
    sentUser: null,
    receiverUser: null,
}

const typingReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TYPING:
            return action.payload;
        default: return state;
    }
};

export default typingReducer;