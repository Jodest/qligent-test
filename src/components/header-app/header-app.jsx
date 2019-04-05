import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import './header-app.scss';

const Header = () => {
  return (
    <AppBar position="static" className={'header'}>
      {/* <Toolbar> */}
        <h2>Мероприятия</h2>
      {/* </Toolbar> */}
    </AppBar>
  );
};

export default Header;
