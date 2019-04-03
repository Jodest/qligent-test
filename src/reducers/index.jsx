import {combineReducers} from 'redux';

import taskList from './task-list';
import addTaskDialog from './add-task-dialog';
import deleteTaskDialog from './delete-task-dialog';

const appReducer = combineReducers({
  taskList,
  addTaskDialog,
  deleteTaskDialog
});

export default appReducer;
