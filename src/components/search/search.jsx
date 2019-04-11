import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  search: {
    width: '100%'
  }
});

const Search = ({ list, searchAction, classes }) => {
  return (
    <Input
      type="text"
      placeholder="Поиск"
      value={list.searchString}
      onChange={ ({target}) => searchAction(target.value || '') }
      className={classes.search}
    />
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
