import React, {useState} from 'react';
import {connect} from 'react-redux';

import {searchTask} from '../../actions';

import Input from '@material-ui/core/Input';

const Search = ({searchTask}) => {
  const [value, setValue] = useState('');

  const handleSearch = ({target}) => {
    setValue(target.value);
    searchTask(target.value || null);
  };

  return (
      <Input
          type="text"
          placeholder="Поиск"
          value={value}
          onChange={handleSearch}
      />
  );
};

const mapStateToProps = ({tasks}) => ({
  tasks,
});

const mapDispatchToProps = {
  searchTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
