import {
  ADD_ERROR,
  ADD_REBELDE,
  FETCH_REBELDE,
  UPDATE_REBELDE,
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
        return response;
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
      reject(error);
    });
});

export const updateColaborador = colaborador => dispatch => new Promise((resolve, reject) => {
  fetch(`${enviroment.apiUrl}colaborador/${colaborador.uuid}`, {
    method: 'put',
    body: JSON.stringify(colaborador),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.status == 200) {
        return response;
      }
      throw response;
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

export const filterColaborador = (mes, dia) => (dispatch) => {
  fetch(`${enviroment.apiUrl}colaborador/filtro?mes=${mes}&dia=${dia}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      return [];
    })
    .then(data => dispatch({
      type: FETCH_REBELDE,
      colaborador: data,
    }));
};
