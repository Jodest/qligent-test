import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeAddTaskDialog, addTask } from '../../actions';

const storeAddTaskDialog = () => (Wrapped) => {
    console.log(Wrapped);
  return (props) => {
    console.log(props);

    return (
        <Wrapped {...props} closeAddTaskDialog={closeAddTaskDialog} addTask={addTask}/>
    );
  }
};

// const mapStateToProps = ({ addTaskDialog }) => {
//   return {
//     addTaskDialog
//   };
// };

const mapDispatchToProps = (dispatch) => bindActionCreators({
  closeAddTaskDialog,
  addTask
}, dispatch);

// export default connect(null, mapDispatchToProps)(storeAddTaskDialog);

export default storeAddTaskDialog;
