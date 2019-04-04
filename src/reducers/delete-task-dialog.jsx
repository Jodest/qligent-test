const initState = {
    show: false
};

const deleteTaskDialog = (state = initState, { type }) => {

  switch (type) {
    case 'OPEN_DELETE_TASK_DIALOG':
      return {
        show: true
    };
    case 'CLOSE_DELETE_TASK_DIALOG':
      return initState;

    default:
      return state;
  }
};

export default deleteTaskDialog;
