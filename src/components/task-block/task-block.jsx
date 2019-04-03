import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';

import Search from '../search';
import TaskItem from '../task-item';

import Checkbox from '@material-ui/core/Checkbox';

import { openAddTaskDialog, openDeleteTaskDialog, toogleCkeckAllTask } from '../../actions';

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
          <Button onClick={handleOpenAddTaskDialog}>+</Button>
          <Button onClick={handleOpenDeleteTaskDialog} disabled={taskList.deleteButtonDisable}>-</Button>
        </div>
        <Search></Search>
      </header>
      <Table className="table">
        <thead>
          <tr>
            <th>
              <Checkbox onChange={handleToogleCkeckAllTask} checked={taskList.checkedAll} />
            </th>
            <th>Название</th>
            <th>Дата</th>
            <th>Место проведения</th>
          </tr>
        </thead>

        <tbody>
          {
            taskList.work.map((el) => {
              return <TaskItem item={el} key={el.id}></TaskItem>
            })
          }
        </tbody>
      </Table>
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
