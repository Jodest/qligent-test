import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import Search from '../search';

import { toogleCkeckTask } from '../../actions';

const TaskItem = ({ item, toogleCkeckTask }) => {
  // console.log(item);
  const { id, title, date, place, checked } = item;
  console.log(id, title, date, place, checked);
  const handleToogleCkeckTask = () => {
    toogleCkeckTask(id);
  };

  return (
    <tr key={id}>
      <td>
        <input type="checkbox" value={checked} onChange={handleToogleCkeckTask} checked={checked} />
      </td>
      <td>{title}</td>
      <td>{new Date(date).toDateString()}</td>
      <td>{place}</td>
    </tr>
  );
};

// const mapStateToProps = ({ taskList }) => ({
//   taskList,
// });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toogleCkeckTask
}, dispatch);

export default connect(null, mapDispatchToProps)(TaskItem);
// export default TaskItem;
