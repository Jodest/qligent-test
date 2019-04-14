import { TOGGLE_DELETE_TASK_DIALOG } from '../constants';

const initState = {
    show: false
};

const deleteTaskDialog = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_DELETE_TASK_DIALOG:
      return {
        show: payload
      };

    default:
      return state;
  }
};

export default deleteTaskDialog;
