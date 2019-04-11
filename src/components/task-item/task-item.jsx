import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  item: {
    width: '30%'
  }
});

const TaskItem = ({ item, list, toggleCheckTask, classes }) => {
  const { id, title, date, place } = item;

  return (
    <ListItem divider={true} button={true} onClick={() => toggleCheckTask(id)}>
        <Checkbox checked={Boolean(list.checked[id])} />
        <ListItemText className={classes.item}>
          {title}
        </ListItemText>
        <ListItemText className={classes.item}>
          {new Date(date).toLocaleDateString()}
        </ListItemText>
        <ListItemText className={classes.item}>
          {place}
        </ListItemText>
    </ListItem>
  );
};

TaskItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskItem);
