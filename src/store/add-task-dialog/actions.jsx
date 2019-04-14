import { TOGGLE_ADD_TASK_DIALOG } from '../constants';

export const toggleAddTaskDialog = (show) => ({
  type: TOGGLE_ADD_TASK_DIALOG,
  payload: show
});