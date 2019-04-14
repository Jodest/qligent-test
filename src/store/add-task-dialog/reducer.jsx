import { TOGGLE_ADD_TASK_DIALOG } from '../constants';

const initState = {
    show: false
};

const addTaskDialog = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_ADD_TASK_DIALOG:
      return {
        show: payload
      }

    default:
      return state;
  }
};

export default addTaskDialog;
