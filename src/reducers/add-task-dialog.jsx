const initState = {
    show: false,
    title: '',
    date: '',
    place: ''
};

const addTaskDialog = (state = initState, { type }) => {

  switch (type) {
    case 'OPEN_ADD_TASK_DIALOG':
      return {
        ...state,
        show: true
    };
    case 'CLOSE_ADD_TASK_DIALOG':
      return initState;

    default:
      return state;
  }
};

export default addTaskDialog;
