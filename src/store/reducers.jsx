import { combineReducers } from 'redux';

import { tasks } from './tasks';
import { addTaskDialog } from './add-task-dialog';
import { deleteTaskDialog } from './delete-task-dialog';
import { updateCityList } from './city-list';

const appReducer = combineReducers({
  tasks,
  addTaskDialog,
  deleteTaskDialog,
  updateCityList
});

export default appReducer;
