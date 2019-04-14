import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { searchTask, toggleCheckAllTask, toggleCheckTask } from '../../store/tasks';
import { openAddTaskDialog } from '../../store/add-task-dialog';
import { openDeleteTaskDialog } from '../../store/delete-task-dialog';

const storeTaskBlock = (Wrapped) => (props) => {
  return (
    <Wrapped {...props} />
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks
});

const mapDispatchToProps = {
  searchTask,
  toggleCheckAllTask,
  toggleCheckTask,
  openAddTaskDialog,
  openDeleteTaskDialog
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  storeTaskBlock
);
