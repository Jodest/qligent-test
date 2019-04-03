import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { searchTask } from '../../actions';

const Search = ({ taskList, searchTask }) => {
  const handleSearchTask = () => {
    searchTask();
  };

  return (
    <input type="text" placeholder="Поиск" onChange={handleSearchTask} />
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  searchTask
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
