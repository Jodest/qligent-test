import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { closeAddTaskDialog, addTask } from '../../actions';

const storeAddTaskDialog = (Wrapped) => ({ addTaskDialog, addTask, closeAddTaskDialog }) => {
  return (
    <Wrapped addTaskDialog={addTaskDialog} closeAddTaskDialog={closeAddTaskDialog} addTask={addTask} />
  );
};

const mapStateToProps = ({ addTaskDialog }) => ({
  addTaskDialog
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  closeAddTaskDialog,
  addTask
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  storeAddTaskDialog
);
