import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteTask, closeDeleteTaskDialog } from '../../actions';

const DeleteTaskDialog = ({ deleteTaskDialog, deleteTask, closeDeleteTaskDialog }) => {

  const confirmDelete = () => {
    deleteTask();
    closeDeleteTaskDialog();
  };

  const cancel = () => {
    closeDeleteTaskDialog();
  };

  if (deleteTaskDialog.show) {
    return (
      <div>
        <h1>Подтвердите удаление</h1>
        <button onClick={cancel}>Отмена</button>
        <button onClick={confirmDelete}>Удалить</button>
      </div>
    );
  } else {
    return null;
  }

};

const mapStateToProps = ({ deleteTaskDialog }) => ({
  deleteTaskDialog
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask,
  closeDeleteTaskDialog
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTaskDialog)