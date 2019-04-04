export const openDeleteTaskDialog = (text) => ({
  type: 'OPEN_DELETE_TASK_DIALOG',
  payload: text
});

export const closeDeleteTaskDialog = (text) => ({
  type: 'CLOSE_DELETE_TASK_DIALOG',
  payload: text
});