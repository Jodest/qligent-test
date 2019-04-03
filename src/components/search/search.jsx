import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Input from '@material-ui/core/Input';

import { searchTask } from '../../actions';

const Search = ({ taskList, searchTask }) => {
  const handleSearchTask = (event) => {
    searchTask(event.target.value);
  };

  return (
    <Input type="text" placeholder="Поиск" value={taskList.search} onChange={handleSearchTask} />
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  searchTask
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
