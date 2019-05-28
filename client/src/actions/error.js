import { DELETE_ERROR } from './';

export const deleteError = () => dispatch => {
  dispatch({
    type: DELETE_ERROR
  });
};
