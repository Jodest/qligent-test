import React from 'react';
import {connect} from 'react-redux';

import { toggleCheckTask } from '../../actions';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const TaskItem = ({ item, tasks, toggleCheckTask }) => {
  const { id, title, date, place } = item;
  const handleToggleCheckTask = () => {
    toggleCheckTask(id);
  };

  return (
    <ListItem divider={true} button={true} onClick={handleToggleCheckTask}>
        <Checkbox checked={Boolean(tasks.checked[id])} />
        <ListItemText>
          {title}
        </ListItemText>
        <ListItemText>
          {new Date(date).toLocaleDateString()}
        </ListItemText>
        <ListItemText>
          {place}
        </ListItemText>
    </ListItem>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = {
  toggleCheckTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
