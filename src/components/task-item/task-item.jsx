import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Checkbox from '@material-ui/core/Checkbox';

import { toogleCkeckTask } from '../../actions';

const TaskItem = ({ item, toogleCkeckTask }) => {
  const { id, title, date, place, checked } = item;
  // console.log(id, title, date, place, checked);
  const handleToogleCkeckTask = () => {
    toogleCkeckTask(id);
  };

  // console.log('new', checked);

  return (
    <tr key={id}>
      <td>
        <Checkbox onChange={handleToogleCkeckTask} checked={checked} />
      </td>
      <td>{title}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{place}</td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toogleCkeckTask
}, dispatch);

export default connect(null, mapDispatchToProps)(TaskItem);
