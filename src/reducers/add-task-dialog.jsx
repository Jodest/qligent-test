const addTaskDialog = (state, { type }) => {

  if (state === undefined) {
    return {
      show: false,
      title: '',
      date: '',
      place: ''
    };
  }

  switch (type) {
    case 'OPEN_ADD_TASK_DIALOG':
    console.log('tut', state)
      return {
        ...state.addTaskDialog,
        show: true,
    };
    case 'CLOSE_ADD_TASK_DIALOG':
      return state.addTaskDialog;

    default:
      return state.addTaskDialog;
  }
};

export default addTaskDialog;
