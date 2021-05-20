import { combineReducers } from 'redux';

// Reducers
import planReducer from '../reducer/Plan';

// Combine Reducers
const reducers = combineReducers({
    planReducer,
});

export default reducers;
