import React from 'react';

import {connect} from 'react-redux';
import {toggleCheckTask} from '../../actions';

import Checkbox from '@material-ui/core/Checkbox';

const TaskItem = ({
                    item: {
                      id, title, date, place,
                    },
                    tasks,
                    toggleCheckTask,
                  }) => {

  const handleToggleCheckTask = () => {
    toggleCheckTask(id);
  };

  return (
      <tr key={id}>
        <td>
          <Checkbox
              onChange={handleToggleCheckTask}
              checked={Boolean(tasks.checked[id])}
          />
        </td>
        <td>{title}</td>
        <td>{date}</td>
        <td>{place}</td>
      </tr>
  );
};

const mapStateToProps = ({tasks}) => ({
  tasks,
});

const mapDispatchToProps = {
  toggleCheckTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
