import React from 'react';

import { connect } from 'react-redux';

import TaskList from '../task-list';
import Search from '../search';
import { openAddTaskDialog, openDeleteTaskDialog } from '../../actions';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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
      <AppBar
        className="task-block-header"
        position="relative"
        classes={{}}
      >
        <Toolbar>
          <div className="buttons">
            <Button
              onClick={ handleOpenAddTaskDialog }
            >
              +
            </Button>
            <Button
              onClick={ handleOpenDeleteTaskDialog }
              disabled={ !lengthCheckedId }
            >
              -
            </Button>
          </div>
          <Search />
        </Toolbar>
      </AppBar>
      <TaskList />
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = {
  openAddTaskDialog,
  openDeleteTaskDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskBlock);