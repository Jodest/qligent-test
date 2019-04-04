export const openAddTaskDialog = text => ({
  type: 'OPEN_ADD_TASK_DIALOG',
  payload: text
});

export const closeAddTaskDialog = text => ({
  type: 'CLOSE_ADD_TASK_DIALOG',
  payload: text
});
