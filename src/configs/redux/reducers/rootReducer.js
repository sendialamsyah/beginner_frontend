import {combineReducers} from 'redux'
import todosReducer from './todosReducer'
import userReducer from './userReducer'
import productReducer from './productReducer'
import sellingReducer from './sellingReducer'

const rootReducer = combineReducers({
    todo: todosReducer,
    user: userReducer,
    product: productReducer,
    sellingProduct: sellingReducer,
})

export default rootReducer