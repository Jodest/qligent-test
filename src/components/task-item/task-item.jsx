import React from 'react';
import {connect} from 'react-redux';

import { toggleCheckTask } from '../../actions';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const TaskItem = ({ item, tasks, toggleCheckTask }) => {
  // const { id, title, date, place, checked } = item;
  const { id, title, date, place } = item;
  const handleToggleCheckTask = () => {
    toggleCheckTask(id);
  };

  return (
    // <tr key={id}>
    //   <td>
    //     {/* <Checkbox onChange={handleToggleCheckTask} checked={checked} /> */}
    //     <Checkbox onChange={handleToggleCheckTask} checked={Boolean(tasks.checked[id])} />
    //   </td>
    //   <td>{title}</td>
    //   <td>{new Date(date).toLocaleDateString()}</td>
    //   <td>{place}</td>
    // </tr>
    <ListItem divider={true} button={true} onClick={handleToggleCheckTask}>
      <Checkbox onChange={handleToggleCheckTask} checked={Boolean(tasks.checked[id])} />
      <Typography>
        {title}
      </Typography>
      <Typography>
        {new Date(date).toLocaleDateString()}
      </Typography>
      <Typography>
        {place}
      </Typography>
    </ListItem>
  );
};

const mapStateToProps = ({tasks}) => ({
  tasks,
});

const mapDispatchToProps = {
  toggleCheckTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
