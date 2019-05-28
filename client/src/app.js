import { Provider } from 'react-redux';
import React from 'react';
import Routes from './routes';
import { ToastProvider } from 'react-toast-notifications';
import { hot } from 'react-hot-loader/root';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </Provider>
  );
};

export default hot(App);
