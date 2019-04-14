import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { closeDeleteTaskDialog } from '../../store/delete-task-dialog';
import { deleteTask } from '../../store/tasks';

const storeDeleteTaskDialog = (Wrapped) => (props) => {
  return (
    <Wrapped {...props} />
  );
};

const mapStateToProps = ({ deleteTaskDialog }) => ({
  deleteTaskDialog
});

const mapDispatchToProps = {
  closeDeleteTaskDialog,
  deleteTask
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  storeDeleteTaskDialog
);
