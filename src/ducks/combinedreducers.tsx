import {combineReducers} from 'redux';
import productReducer from './productReducers/reducer';

const combinedReducer = combineReducers({
  productReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

export default combinedReducer;
