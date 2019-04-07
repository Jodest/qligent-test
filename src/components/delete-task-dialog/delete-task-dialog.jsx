import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { deleteTask, closeDeleteTaskDialog } from '../../actions';

const DeleteTaskDialog = ({ deleteTaskDialog, deleteTask, closeDeleteTaskDialog }) => {

  const confirmDelete = () => {
    deleteTask();
    closeDeleteTaskDialog();
  };

  const cancel = () => {
    closeDeleteTaskDialog();
  };

    return (
      <Dialog open={deleteTaskDialog.show}>
        <DialogTitle>Подтвердите удаление</DialogTitle>
        <DialogActions>
          <Button onClick={cancel}>Отмена</Button>
          <Button onClick={confirmDelete}>Удалить</Button>
        </DialogActions>
      </Dialog>
    );
};

const mapStateToProps = ({ deleteTaskDialog }) => ({
  deleteTaskDialog
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask,
  closeDeleteTaskDialog
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTaskDialog)