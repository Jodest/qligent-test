const deleteTaskDialog = (state, { type }) => {
  if (state === undefined) {
    return {
      show: false
    };
  }

  switch (type) {
    case 'OPEN_DELETE_TASK_DIALOG':
      return {
        show: true
      };
    case 'CLOSE_DELETE_TASK_DIALOG':
      return state.deleteTaskDialog;

    default:
      return state.deleteTaskDialog;
  }
};

export default deleteTaskDialog;
