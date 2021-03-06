import { OPEN_WEBSOCKET, UPDATE_SOCKET_OBJECT } from '../constants/ActionTypes'

const initialState = {
  clientList: [],
  socket: null,
  socketConnected: false,
}

export default function (state = initialState, action) {
  switch(action.type) {
    case OPEN_WEBSOCKET:
      return {
        ...state,
        socketConnected: true,
      }
    case UPDATE_SOCKET_OBJECT:
      return {
        ...state,
        socket: action.payload,
      }
    default:
      return state
  }
}
