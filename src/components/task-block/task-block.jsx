import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { storeTaskBlock } from '../containers';

// import { connect } from 'react-redux';

import TaskList from '../task-list';
import Search from '../search';
// import { openAddTaskDialog, openDeleteTaskDialog, searchTask, toggleCheckAllTask, toggleCheckTask } from '../../actions';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  header: {
    backgroundColor: grey[300],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    fontSize: 30
  },
  search: {
    width: 500
  },
  taskBlock: {
    width: '80%',
    margin: '0 auto',
    marginTop: 20
  }
});

const TaskBlock = ({
                     tasks,
                     openAddTaskDialog,
                     openDeleteTaskDialog,
                     searchTask,
                     toggleCheckAllTask,
                     toggleCheckTask,
                     classes
                   }) => {
  const lengthCheckedId = Object.keys(tasks.checked).length;

  return (
    <div className={classes.taskBlock}>
      <AppBar
        className={classes.header}
        position="relative"
        color="secondary"
      >
        <Toolbar>
          <Button
            onClick={ () => openAddTaskDialog() }
            className={classes.button}
          >
            +
          </Button>
          <Button
            onClick={ () => openDeleteTaskDialog() }
            disabled={ !lengthCheckedId }
            className={classes.button}
          >
            -
          </Button>
        </Toolbar>

        <Toolbar className={classes.search}>
          <Search
            list={tasks}
            searchAction={searchTask}
          />
        </Toolbar>
      </AppBar>

      <TaskList
        list={tasks}
        toggleCheckAllTask={toggleCheckAllTask}
        toggleCheckTask={toggleCheckTask}
      />
    </div>
  );
};

// const mapStateToProps = ({ tasks }) => ({
//   tasks,
// });

// const mapDispatchToProps = {
//   openAddTaskDialog,
//   openDeleteTaskDialog,
//   searchTask,
//   toggleCheckAllTask,
//   toggleCheckTask
// };

TaskBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TaskBlock));
export default compose(
  storeTaskBlock,
  withStyles(styles)
)(TaskBlock);