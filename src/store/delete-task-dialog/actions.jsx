import { TOGGLE_DELETE_TASK_DIALOG } from '../constants';

export const toggleDeleteTaskDialog = (show) => ({
  type: TOGGLE_DELETE_TASK_DIALOG,
  payload: show
});