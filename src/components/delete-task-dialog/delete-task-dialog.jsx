import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteTask, closeDeleteTaskDialog } from '../../actions';

const DeleteTaskDialog = ({ deleteTask, closeDeleteTaskDialog }) => {

  const confirmDelete = () => {
    deleteTask();
    closeDeleteTaskDialog();
  };

  const cancel = () => {
    closeDeleteTaskDialog();
  };

  return (
    <div>
      <h1>Подтвердите удаление</h1>
      <button onClick={cancel}>Отмена</button>
      <button onClick={confirmDelete}>Удалить</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask,
  closeDeleteTaskDialog
}, dispatch);

export default connect(null, mapDispatchToProps)(DeleteTaskDialog)