import { SEND_CONVERSATION } from './../constants/ActionTypes';

const initialState = {
    sentUser: null,
    receiverUser: null,
}

const conversationReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_CONVERSATION:
            return action.payload;
        default: return state;
    }
};

export default conversationReducer;