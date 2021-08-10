import {combineReducers} from 'redux'
import authModalReducer from './authModal'
import authReducer from './auth'
import topBarReducer from '../reducers/topBar'
import goodsReducer from '../reducers/goods'
import addNewItemReducer from "./addNewItem";


export default combineReducers({
    authModalReducer,
    authReducer,
    topBarReducer,
    goodsReducer,
    addNewItemReducer,
})
