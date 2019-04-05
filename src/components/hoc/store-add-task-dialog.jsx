import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { closeAddTaskDialog, addTask } from '../../actions';

const storeAddTaskDialog = (Wrapped) => (props) => {
  return (
    <Wrapped {...props} />
  );
};

const mapStateToProps = ({ addTaskDialog }) => ({
  addTaskDialog
});

const mapDispatchToProps = {
  closeAddTaskDialog,
  addTask
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  storeAddTaskDialog
);
