import React from 'react';

import { connect } from 'react-redux';

import TaskTable from '../task-table';
import Search from '../search';
import { openAddTaskDialog, openDeleteTaskDialog } from '../../actions';

import Button from '@material-ui/core/Button';

import './task-block.scss'

const TaskBlock = ({
                     tasks,
                     openAddTaskDialog,
                     openDeleteTaskDialog
                   }) => {
  const lengthCheckedId = Object.keys(tasks.checked).length;

  const handleOpenAddTaskDialog = () => {
    openAddTaskDialog();
  };
  const handleOpenDeleteTaskDialog = () => {
    openDeleteTaskDialog();
  };

  return (
    <div className="task-block">
      <header className="task-block-header">
        <div className="buttons">
          <Button onClick={handleOpenAddTaskDialog}>+</Button>
          <Button onClick={handleOpenDeleteTaskDialog} disabled={!lengthCheckedId}>-</Button>
        </div>
        <Search />
      </header>
      <TaskTable />
    </div>
  );
};

const mapStateToProps = ({tasks}) => ({
  tasks,
});

const mapDispatchToProps = {
  openAddTaskDialog,
  openDeleteTaskDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskBlock);