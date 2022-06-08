import {combineReducers} from 'redux'
import todosReducer from './todosReducer'
import userReducer from './userReducer'
import productReducer from './homeReducer'

const rootReducer = combineReducers({
    todo: todosReducer,
    user: userReducer,
    product: productReducer
})

export default rootReducer