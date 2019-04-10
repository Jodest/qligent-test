import React from 'react';
import {connect} from 'react-redux';

import TaskItem from '../task-item';
import { toggleCheckAllTask } from '../../actions';

import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const TaskList = ({ tasks, toggleCheckAllTask }) => {
  const handleToggleCheckAllTask = () => {
    toggleCheckAllTask();
  };

  const lengthCheckedId = Object.keys(tasks.checked).length;
  const lengthSearchedId = Object.keys(tasks.search).length;

  const isCheckedAll = Boolean((lengthCheckedId && lengthCheckedId === tasks.data.length) || (lengthSearchedId && lengthCheckedId === lengthSearchedId));

  const renderItems = () => {
    if (lengthSearchedId) {
      return tasks.data.filter((item) => tasks.search[item.id]).map(item => <TaskItem item={item} key={item.id}/>)
    } else {
      return tasks.data.map((item) => <TaskItem item={item} key={item.id}/>);
    }
  };

  return (
    <Paper>
    <List disablePadding={true}>
      <ListItem divider={true} button={true} onClick={handleToggleCheckAllTask} className="task-list-header">
        <Checkbox checked={isCheckedAll} />
        <ListItemText>
          Название
        </ListItemText>
        <ListItemText>
          Дата
        </ListItemText>
        <ListItemText>
          Место проведения
        </ListItemText>
      </ListItem>
      {renderItems()}
    </List>
    </Paper>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = {
  toggleCheckAllTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
