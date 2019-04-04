import { combineReducers } from 'redux';

// import taskList from './task-list';
import tasks from './tasks';
import addTaskDialog from './add-task-dialog';
import deleteTaskDialog from './delete-task-dialog';

const appReducer = combineReducers({
//   taskList,
  tasks,
  addTaskDialog,
  deleteTaskDialog
});

export default appReducer;
