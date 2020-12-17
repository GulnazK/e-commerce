import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {catalogReducer} from "./reducers/shopReducer";


export const store = createStore(catalogReducer, composeWithDevTools())