import React from 'react';
import { connect } from 'react-redux';

import { searchTask } from '../../actions';

import Input from '@material-ui/core/Input';

const Search = ({ tasks, searchTask }) => {
  const handleSearch = ({ target }) => {
    searchTask(target.value || '');
  };

  return (
    <Input
      type="text"
      placeholder="Поиск"
      value={tasks.searchString}
      onChange={handleSearch}
    />
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks
});

const mapDispatchToProps = {
  searchTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
