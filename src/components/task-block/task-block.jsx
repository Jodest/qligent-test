import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Button from '@material-ui/core/Button';

import Search from '../search';
import TaskTable from '../task-table';


import { openAddTaskDialog, openDeleteTaskDialog } from '../../actions';

const TaskBlock = ({ taskList, openAddTaskDialog, openDeleteTaskDialog }) => {
  const handleOpenAddTaskDialog = () => {
    openAddTaskDialog();
  };
  const handleOpenDeleteTaskDialog = () => {
    openDeleteTaskDialog();
  };

  return (
    <div>
      <header>
        <div className="buttons">
          <Button onClick={handleOpenAddTaskDialog}>+</Button>
          <Button onClick={handleOpenDeleteTaskDialog} disabled={taskList.deleteButtonDisable}>-</Button>
        </div>
        <Search></Search>
      </header>
      <TaskTable />
    </div>
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  openAddTaskDialog,
  openDeleteTaskDialog
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskBlock);
