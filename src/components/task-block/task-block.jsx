import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Search from '../search';

import { openAddTaskDialog } from '../../actions';

const TaskBlock = ({ taskList, openAddTaskDialog }) => {
  console.log(taskList, openAddTaskDialog);
  const handleOpenAddTaskDialog = () => {
    openAddTaskDialog();
  };
  const renderRow = (task) => {
    const { id, title, date, place } = task;

    console.log(id, title, date, place);

    return (
      <tr key={id}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{title}</td>
        <td>{new Date(date).toDateString()}</td>
        <td>{place}</td>
      </tr>
    );
  }

  return (
    <div>
      <header>
        <div className="buttons">
          <div onClick={handleOpenAddTaskDialog}>+</div>
          <div>-</div>
        </div>
        <Search></Search>
      </header>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>Название</th>
            <th>Дата</th>
            <th>Место проведения</th>
          </tr>
        </thead>

        <tbody>
          { taskList.tasks.map(renderRow) }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ taskList }) => ({
  taskList,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  openAddTaskDialog
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskBlock);
