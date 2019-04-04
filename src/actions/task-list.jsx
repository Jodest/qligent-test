export const addTask = (data) => ({
  type: 'ADD_TASK',
  payload: data
});

export const deleteTask = () => ({
  type: 'DELETE_TASK'
});

export const searchTask = (value) => ({
  type: 'SEARCH_TASK',
  payload: value
});

export const toggleCheckAllTask = () => ({
  type: 'TOGGLE_CHECK_ALL_TASK'
});

export const toggleCheckTask = (id) => ({
    type: 'TOGGLE_CHECK_TASK',
    payload: id
});