import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import './header-app.scss';

const Header = () => {
  return (
    <AppBar position="static" className={'header'}>
      <Toolbar>
        <Typography component="h3" gutterBottom>Мероприятия</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
