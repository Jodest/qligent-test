import {combineReducers} from 'redux';

import taskList from './task-list';
import addTaskDialog from './add-task-dialog';

const appReducer = combineReducers({
  taskList,
  addTaskDialog
});

export default appReducer;
