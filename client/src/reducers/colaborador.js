import { ADD_REBELDE, FETCH_REBELDE, REQUESTING } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REBELDE: {
      const { colaborador } = action;
      return [colaborador].concat(state);
    }

    case FETCH_REBELDE: {
      const { colaborador } = action;
      return colaborador;
    }

    default: {
      return state;
    }
  }
};
