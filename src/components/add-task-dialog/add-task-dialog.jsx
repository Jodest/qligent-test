import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { storeAddTaskDialog, storeCityList } from '../containers';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

const styles = theme => ({
  textField: {
    width: 300
  },
  listItem: {
    height: 70
  }
});

const AddTaskDialog = ({ addTaskDialog, addTask, toggleAddTaskDialog, fetchCities, updateCityList, classes }) => {
  useEffect(() => {
    fetchCities();
  }, []);

  const handleCloseAddTaskDialog = () => {
    clearState();
    toggleAddTaskDialog(false);
  };
  const handleAddTask = () => {
    addTask({ title, date, place });
    clearState();
    toggleAddTaskDialog(false);
  };

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [place, setPlace] = useState('');

  const clearState = () => {
    setTitle('');
    setDate(null);
    setPlace('');
  }

  return (
    <Dialog
      open={addTaskDialog.show}
      onClose={handleCloseAddTaskDialog}
      disableBackdropClick={true}
      fullWidth={true}
      maxWidth = {'sm'}
    >
      <DialogTitle className="title">Добавление мероприятия</DialogTitle>
      <DialogContent>
        <List>
          <ListItem className={classes.listItem}>
            <TextField
              type="text"
              value={title}
              label="Название"
              onChange={({target}) => {setTitle(target.value)}}
              className={classes.textField}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                label="Дата"
                value={date}
                onChange={(value) => setDate(value)}
                className={classes.textField}
              />
            </MuiPickersUtilsProvider>
          </ListItem>
          <ListItem className={classes.listItem}>
            <FormControl>
              <InputLabel htmlFor="city-select">Город</InputLabel>
              <Select
                value={place}
                inputProps={{
                  name: 'city',
                  id: 'city-select',
                }}
                className={classes.textField}
                onChange={(event) => setPlace(event.target.value)}
              >
                {
                  updateCityList.cities.map((el, ind) => <MenuItem value={el} key={ind}>{el}</MenuItem>)
                }
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions className="buttons">
        <Button
          onClick={handleCloseAddTaskDialog}
          color="primary"
        >
          Отмена
        </Button>
        <Button
          onClick={handleAddTask}
          disabled={!title || !date || !place}
          color="primary"
        >
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddTaskDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  storeCityList,
  storeAddTaskDialog,
  withStyles(styles)
)(AddTaskDialog);