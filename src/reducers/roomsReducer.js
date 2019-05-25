import { GET_ROOMS, DISCONNECT } from '../constants/ActionTypes';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ROOMS:
            return [...action.payload];
        // case UPDATE_SOCKET_OBJECT:
        //   return {
        //     ...state,
        //     socket: action.payload,
        //   }
        default:
            return state
    }
}
