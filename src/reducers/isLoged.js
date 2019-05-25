import * as Types from './../constants/ActionTypes';
var initialState = false;

const isLoged = (state = initialState, action) => {
    switch(action.type){
        case Types.TOGGLE_LOGGED:
            return action.value;
        default: return state;
    }
};

export default isLoged;