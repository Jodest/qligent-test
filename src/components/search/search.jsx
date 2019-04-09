import React, { useState } from 'react';
import { connect } from 'react-redux';

import { searchTask } from '../../actions';

import Input from '@material-ui/core/Input';

const Search = ({ tasks, searchTask }) => {
  console.log(tasks);
  // const [value, setValue] = useState('');

  const handleSearch = ({ target }) => {
    // setValue(target.value);
    console.log('tut', target.value);
    searchTask(target.value || null);
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
