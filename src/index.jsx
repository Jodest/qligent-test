import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';

import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import muiTheme from './theme';

import App from './components/app';

ReactDOM.render(
    <React.Fragment>
      <CssBaseline/>

      <MuiThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <App/>
        </Provider>
      </MuiThemeProvider>
    </React.Fragment>
    , document.getElementById('root'));