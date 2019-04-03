import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { closeAddTaskDialog, addTask } from '../../actions';

const storeAddTaskDialog = (Wrapped) => ({addTask, closeAddTaskDialog}) => {
    return (
        <Wrapped closeAddTaskDialog={closeAddTaskDialog} addTask={addTask} />
    );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  closeAddTaskDialog,
  addTask
}, dispatch);

export default compose(
    connect(null, mapDispatchToProps),
    storeAddTaskDialog
);
