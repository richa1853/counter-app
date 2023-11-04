import { createStore, combineReducers } from 'redux';
import counterReducer from '../Reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;