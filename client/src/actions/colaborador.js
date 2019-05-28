import {
  ADD_ERROR, ADD_REBELDE, FETCH_REBELDE, UPDATE_REBELDE,
} from '.';

import enviroment from '../enviroment';

export const addColaborador = colaborador => dispatch => new Promise((resolve, reject) => {
  fetch(`${enviroment.apiUrl}colaborador/`, {
    method: 'post',
    body: JSON.stringify(colaborador),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.status == 201) {
        return response.json();
      }
      throw response.json();
    })
    .then((data) => {
      dispatch({
        type: ADD_REBELDE,
        colaborador: data,
      });
      resolve(data);
    })
    .catch((err) => {
      err.then((error) => {
        dispatch({
          type: ADD_ERROR,
          error,
        });
      });
      reject(error);
    });
});

export const updateColaborador = colaborador => dispatch => new Promise((resolve, reject) => {
  fetch(`${enviroment.apiUrl}colaborador`, {
    method: 'put',
    body: JSON.stringify(colaborador),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      throw response.json();
    })
    .then(() => {
      dispatch(fetchColaborador());
      resolve();
    })
    .catch((err) => {
      err.then((error) => {
        dispatch({
          type: ADD_ERROR,
          error,
        });
      });
      reject(err);
    });
});

export const deleteColaborador = id => dispatch => new Promise((resolve, reject) => {
  fetch(`${enviroment.apiUrl}colaborador/${id}`, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.status == 200) {
        resolve();
        return dispatch(fetchColaborador());
      }
      throw response.json();
    })
    .catch((err) => {
      err.then((error) => {
        dispatch({
          type: ADD_ERROR,
          error,
        });
      });

      reject();
    });
});

export const fetchColaborador = () => (dispatch) => {
  fetch(`${enviroment.apiUrl}colaborador/`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      throw response.json();
    })
    .then(data => dispatch({
      type: FETCH_REBELDE,
      colaborador: data,
    }));
};
