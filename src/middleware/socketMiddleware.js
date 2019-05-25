import { 
    OPEN_WEBSOCKET, 
    UPDATE_SOCKET_OBJECT, 
    SEND_USERNAME,
    SET_MESSAGES,

} from '../constants/ActionTypes';
import { getRooms } from '../actions/index'
import io from 'socket.io-client'

var socket
const socketMiddleware = store => next => action => {
    const state = store.getState()
    if (action.type === OPEN_WEBSOCKET) {
        socket = io('localhost:3000')
        socket.on('connect', function () {
            console.log('connected to server', socket)
        })
        // const clientId = socket.id
        socket.on('server-sent-rooms', (data) => {
            if (data.length > 0) {
                store.dispatch(getRooms(data));
            }
        });

        socket.on('server-sent-disconnect', (data) => {
            if (data.length > 0) {
                store.dispatch(getRooms(data));
            }
        })
        
        socket.on('server-sent-conversation', (data) => {
            if (data){
                var messages = [];  
                var arr = data.messages;
                for (let i = 0; i < arr.length; i++){
                    messages.push(arr[i].content);
                }
                store.dispatch({
                    type: SET_MESSAGES,
                    payload: messages
                })
            }
        })


        store.dispatch({
            type: UPDATE_SOCKET_OBJECT,
            payload: socket,
        });
        store.dispatch({
            type: SEND_USERNAME,
            payload: state.currentUser.user.username,
        })
    }

    next(action)
}

export default socketMiddleware
