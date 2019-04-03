import React, { Fragment } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

import HeaderApp from '../header-app';
import TaskBlock from '../task-block';
import AddTaskDialog from '../add-task-dialog';
import DeleteTaskDialog from '../delete-task-dialog';

// import { closeAddTaskDialog, addTask } from '../../actions';

const App = ({ addTaskDialog, deleteTaskDialog }) => {
  return (
    <Fragment>
      { addTaskDialog.show ? <AddTaskDialog /> : null }
      { deleteTaskDialog.show ? <DeleteTaskDialog /> : null }
      <HeaderApp></HeaderApp>
      <main role="main" className="container">
        <TaskBlock></TaskBlock>
      </main>

    </Fragment>
  );
};

const mapStateToProps = ({ addTaskDialog, deleteTaskDialog }) => ({
  addTaskDialog,
  deleteTaskDialog
});

export default connect(mapStateToProps, null)(App);