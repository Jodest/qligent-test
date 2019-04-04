export const addTask = (data) => ({
  type: 'ADD_TASK',
  payload: data,
});

export const deleteTask = () => ({
  type: 'DELETE_TASK',
});

export const searchTask = (value) => ({
  type: 'SEARCH_TASK',
  payload: value,
});

export const openAddTaskDialog = () => ({
  type: 'OPEN_ADD_TASK_DIALOG',
});

export const closeAddTaskDialog = () => ({
  type: 'CLOSE_ADD_TASK_DIALOG',
});

export const openDeleteTaskDialog = () => ({
  type: 'OPEN_DELETE_TASK_DIALOG',
});

export const closeDeleteTaskDialog = () => ({
  type: 'CLOSE_DELETE_TASK_DIALOG',
});

export const toggleCheckAllTask = () => ({
  type: 'TOGGLE_CHECK_ALL_TASK',
});

export const toggleCheckTask = (id) => ({
  type: 'TOGGLE_CHECK_TASK',
  payload: id,
});