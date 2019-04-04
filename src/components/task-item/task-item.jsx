import React from 'react';
import {connect} from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';

import { toggleCheckTask } from '../../actions';

const TaskItem = ({ item, tasks, toggleCheckTask }) => {
  // const { id, title, date, place, checked } = item;
  const { id, title, date, place } = item;
  const handleToggleCheckTask = () => {
    toggleCheckTask(id);
  };

  return (
    <tr key={id}>
      <td>
        {/* <Checkbox onChange={handleToggleCheckTask} checked={checked} /> */}
        <Checkbox onChange={handleToggleCheckTask} checked={Boolean(tasks.checked[id])} />
      </td>
      <td>{title}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{place}</td>
    </tr>
  );
};

const mapStateToProps = ({tasks}) => ({
  tasks,
});

const mapDispatchToProps = {
  toggleCheckTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
