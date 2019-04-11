import React from 'react';
import PropTypes from 'prop-types';

import TaskItem from '../task-item';

import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  firstLineItem: {
    width: '30%'
  },
  firstLineText: {
    color: grey[500],
  }
});

const TaskList = ({ list, toggleCheckAllTask, toggleCheckTask, classes }) => {
  const lengthCheckedId = Object.keys(list.checked).length;
  const lengthSearchedId = Object.keys(list.search).length;

  const isCheckedAll = Boolean((lengthCheckedId && lengthCheckedId === list.data.length) || (lengthSearchedId && lengthCheckedId === lengthSearchedId));

  const renderItems = () => {
    if (lengthSearchedId) {
      return list.data.filter((item) => list.search[item.id]).map(item => <TaskItem item={item} key={item.id} list={list} toggleCheckTask={toggleCheckTask} />)
    } else {
      return list.data.map((item) => <TaskItem item={item} key={item.id} list={list} toggleCheckTask={toggleCheckTask} />);
    }
  };

  return (
    <Paper>
    <List disablePadding={true}>
      <ListItem
        divider={true}
        button={true}
        onClick={() => toggleCheckAllTask()}
      >
        <Checkbox checked={isCheckedAll} />
        <ListItemText className={classes.firstLineItem} primary={<Typography className={classes.firstLineText}>Название</Typography>} />
        <ListItemText className={classes.firstLineItem} primary={<Typography className={classes.firstLineText}>Дата</Typography>} />
        <ListItemText className={classes.firstLineItem} primary={<Typography className={classes.firstLineText}>Место проведения</Typography>} />
      </ListItem>

      {renderItems()}
    </List>
    </Paper>
  );
};

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskList);
