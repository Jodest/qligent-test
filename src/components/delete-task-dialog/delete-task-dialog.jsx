import React from 'react';
import { compose } from 'redux';

import { storeDeleteTaskDialog } from '../containers';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
        <Button
          onClick={cancel}
          color="primary"
        >
          Отмена
        </Button>
        <Button
          onClick={confirmDelete}
          color="primary"
        >
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default compose(storeDeleteTaskDialog)(DeleteTaskDialog);