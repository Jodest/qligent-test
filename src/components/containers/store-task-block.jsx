import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { searchTask, toggleCheckAllTask, toggleCheckTask } from '../../store/tasks';
import { toggleAddTaskDialog } from '../../store/add-task-dialog';
import { toggleDeleteTaskDialog } from '../../store/delete-task-dialog';

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
  toggleAddTaskDialog,
  toggleDeleteTaskDialog
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  storeTaskBlock
);
