import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import appReducers from './reducers/index';
import socketMiddleware from './middleware/socketMiddleware'
import sentUsernameMiddleware from './middleware/sentUsernameMiddleware'
const initialState = {}

const middleware = [thunk, socketMiddleware, sentUsernameMiddleware]

const store = createStore(
    appReducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store
