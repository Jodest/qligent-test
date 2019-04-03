export const addTask = (data) => ({
  type: 'ADD_TASK',
  payload: data
});

export const deleteTask = (data) => ({
  type: 'DELETE_TASK',
  payload: data
});

export const searchTask = (text) => ({
  type: 'SEARCH_TASK',
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

export const openDeleteTaskDialog = (text) => ({
  type: 'OPEN_DELETE_TASK_DIALOG',
  payload: text
});

export const closeDeleteTaskDialog = (text) => ({
  type: 'CLOSE_DELETE_TASK_DIALOG',
  payload: text
});

export const toogleCkeckAllTask = (text) => ({
  type: 'TOOGLE_CKECK_ALL_TASK',
  payload: text
});

export const toogleCkeckTask = (id) => ({
    type: 'TOOGLE_CKECK_TASK',
    payload: id
});