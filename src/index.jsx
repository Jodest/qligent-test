import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from './theme';

import store from './store/store';

import App from './components/app';
import CityService from './services/city-service';
import { CityServiceProvider } from './components/city-service-context';

const cityService = new CityService();

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <CityServiceProvider value={cityService}>
          <App />
        </CityServiceProvider>
      </Provider>
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);
