import { combineReducers } from 'redux';
import error from './error';
import colaborador from './colaborador';

const rootReducer = combineReducers({
  colaborador,
  error,
});

export default rootReducer;
