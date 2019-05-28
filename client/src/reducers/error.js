import { ADD_ERROR, DELETE_ERROR } from '../actions';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR: {
      const { error } = action;
      return error;
    }

    case DELETE_ERROR: {
      return null;
    }

    default: {
      return state;
    }
  }
};
