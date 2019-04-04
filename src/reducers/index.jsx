import { combineReducers } from 'redux';

import tasks from './tasks';
import addTaskDialog from './add-task-dialog';
import deleteTaskDialog from './delete-task-dialog';

const appReducer = combineReducers({
  tasks,
  addTaskDialog,
  deleteTaskDialog
});

export default appReducer;
