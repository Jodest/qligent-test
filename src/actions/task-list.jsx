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

export const toogleCkeckAllTask = (text) => ({
  type: 'TOOGLE_CKECK_ALL_TASK',
  payload: text
});

export const toogleCkeckTask = (id) => ({
    type: 'TOOGLE_CKECK_TASK',
    payload: id
});