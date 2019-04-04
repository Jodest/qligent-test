import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Table from '@material-ui/core/Table';

import TaskItem from '../task-item';

import Checkbox from '@material-ui/core/Checkbox';

import { toogleCheckAllTask } from '../../actions';

const TaskBlock = ({ taskList, toogleCheckAllTask }) => {
  const handleToogleCheckAllTask = () => {
    toogleCheckAllTask();
  };

  const renderRow = () => {
    return taskList.tasks.map((el) => {
      if (el.show) {
        return (
          <TaskItem item={el} key={el.id}></TaskItem>
        );
      }
      return null;
    })
  };

  return (
    <Table className="table">
      <thead>
        <tr>
          <th>
            <Checkbox onChange={handleToogleCheckAllTask} checked={taskList.checkedAll} />
          </th>
          <th>Название</th>
          <th>Дата</th>
          <th>Место проведения</th>
        </tr>
      </thead>

      <tbody>
        {renderRow()}
      </tbody>
    </Table>
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toogleCheckAllTask
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskBlock);
