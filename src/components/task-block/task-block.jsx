import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Search from '../search';

import { openAddTaskDialog, openDeleteTaskDialog, toogleCkeckAllTask } from '../../actions';

import TaskItem from '../task-item';

const TaskBlock = ({ taskList, openAddTaskDialog, openDeleteTaskDialog, toogleCkeckAllTask }) => {
  console.log('raz', taskList);
  const handleOpenAddTaskDialog = () => {
    openAddTaskDialog();
  };
  const handleOpenDeleteTaskDialog = () => {
    openDeleteTaskDialog();
  };
  const handleToogleCkeckAllTask = () => {
    toogleCkeckAllTask();
  };

  return (
    <div>
      <header>
        <div className="buttons">
          <button onClick={handleOpenAddTaskDialog}>+</button>
          <button onClick={handleOpenDeleteTaskDialog} disabled={taskList.deleteButtonDisable}>-</button>
        </div>
        <Search></Search>
      </header>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handleToogleCkeckAllTask} checked={taskList.checkedAll} />
            </th>
            <th>Название</th>
            <th>Дата</th>
            <th>Место проведения</th>
          </tr>
        </thead>

        <tbody>
          {
            taskList.tasks.map((el) => {
              return <TaskItem item={el} key={el.id}></TaskItem>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  openAddTaskDialog,
  openDeleteTaskDialog,
  toogleCkeckAllTask
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskBlock);
