import React from 'react';

import {connect} from 'react-redux';
import {
  openAddTaskDialog,
  openDeleteTaskDialog,
  toggleCheckAllTask,
} from '../../actions';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';

import Search from '../search';
import TaskItem from '../task-item';

// [TODO] Handle sort task by data.
const TaskBlock = ({
                     tasks,
                     openAddTaskDialog,
                     openDeleteTaskDialog,
                     toggleCheckAllTask,
                   }) => {
  const lengthCheckedId = Object.keys(tasks.checked).length;
  const lengthSearchedId = Object.keys(tasks.search).length;

  const handleOpenAddTaskDialog = () => {
    openAddTaskDialog();
  };
  const handleOpenDeleteTaskDialog = () => {
    openDeleteTaskDialog();
  };
  const handleToggleCheckAllTask = () => {
    toggleCheckAllTask();
  };

  const isCheckedAll = Boolean(
      (lengthCheckedId && lengthCheckedId === tasks.data.length)
      || (lengthSearchedId && lengthCheckedId === lengthSearchedId),
  );

  const renderRows = () =>
      lengthSearchedId
          ? tasks.data.
              filter((item) => tasks.search[item.id]).
              map(item => <TaskItem item={item} key={item.id}/>)
          : tasks.data.map((item) => <TaskItem item={item} key={item.id}/>);

  return (
      <div>
        <header>
          <div className="buttons">
            <Button onClick={handleOpenAddTaskDialog}>
              +
            </Button>
            <Button
                onClick={handleOpenDeleteTaskDialog}
                disabled={!lengthCheckedId}
            >
              -
            </Button>
          </div>

          <Search/>
        </header>

        <Table className="table">
          <thead>
          <tr>
            <th>
              <Checkbox
                  onChange={handleToggleCheckAllTask}
                  checked={isCheckedAll}
              />
            </th>
            <th>Название</th>
            <th>Дата</th>
            <th>Место проведения</th>
          </tr>
          </thead>

          <tbody>
          {renderRows()}
          </tbody>
        </Table>
      </div>
  );
};

const mapStateToProps = ({tasks}) => ({
  tasks,
});

const mapDispatchToProps = {
  openAddTaskDialog,
  openDeleteTaskDialog,
  toggleCheckAllTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskBlock);
