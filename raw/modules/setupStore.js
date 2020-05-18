import { createStore, combineReducers } from 'redux';
import {ER , FR} from './reducers';


export default function setupStore()
{
    return createStore(

        combineReducers({ expenses: ER, filters: FR }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        
     );
}