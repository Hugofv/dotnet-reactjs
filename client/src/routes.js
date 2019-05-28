import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Colaborador from './components/views/colaborador/index';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { deleteError } from './actions/error';
import { withToastManager } from 'react-toast-notifications';

const Routes = (props) => {
  useEffect(() => {
    if (props.error) {
      setTimeout(() => {
        props.deleteError();
      }, 6000);

      props.toastManager.add(props.error.message, {
        appearance: 'error',
        autoDismiss: true,
        pauseOnHover: true,
      });
    }
  }, [props.error]);

  return (
    <Router>
      <div styles={{ fontFamily: 'Roboto' }}>
        <Route path="/" exact render={() => <Colaborador {...props} />} />
      </div>
    </Router>
  );
};

function mapStateToProps(state) {
  return {
    error: state.error,
  };
}

export default compose(
  connect(
    mapStateToProps,
    { deleteError },
  ),
  withToastManager,
)(Routes);
