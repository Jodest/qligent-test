const initState = {
    show: false,
    title: '',
    date: '',
    place: ''
};

const addTaskDialog = (state = initState, {type, payload}) => {

  switch (type) {
    case 'OPEN_ADD_TASK_DIALOG':
      return {
        show: true,
        title: '',
        date: '',
        place: ''
    };
    case 'CLOSE_ADD_TASK_DIALOG':
      return initState;

    default:
      return state;
  }
};

export default addTaskDialog;
