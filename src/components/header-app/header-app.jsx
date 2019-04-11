import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  header: {
    alignItems: 'center'
  },
  title: {
    fontSize: 25
  }
});

const Header = ({ title, classes }) => {
  return (
    <AppBar
      position="static"
      className={classes.header}
    >
      <Toolbar>
        <Typography
          component="h1"
          className={classes.title}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
