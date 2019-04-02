export const addTask = (data) => ({
  type: 'ADD_TASK',
  payload: data
});

export const deleteTask = (data) => ({
  type: 'DELETE_TASK',
  payload: data
});

export const search = (text) => ({
  type: 'SEARCH',
  payload: text
});

export const openAddTaskDialog = (text) => ({
  type: 'OPEN_ADD_TASK_DIALOG',
  payload: text
});

export const closeAddTaskDialog = (text) => ({
  type: 'CLOSE_ADD_TASK_DIALOG',
  payload: text
});