import React, { useState } from 'react';
import { compose } from 'redux';

import { storeAddTaskDialog, withCityService } from '../hoc';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const AddTaskDialog = ({ addTaskDialog, addTask, closeAddTaskDialog, cityService }) => {
  const handleCloseAddTaskDialog = () => {
    clearState();
    closeAddTaskDialog();
  };
  const handleAddTask = () => {
    addTask({ title, date, place });
    clearState();
    closeAddTaskDialog();
  };

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');

  const clearState = () => {
    setTitle('');
    setDate('');
    setPlace('');
  }

  return (
    <Dialog
      open={addTaskDialog.show}
      onClose={handleCloseAddTaskDialog}
      disableBackdropClick={true}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle className="title">Добавление мероприятия</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <Input type="text" value={title} placeholder="Название" onChange={(event) => setTitle(event.target.value)} />
          </ListItem>
          <ListItem>
            <TextField
              id="date"
              type="date"
              value={date}
              placeholder="Дата"
              label="Дата"
              onChange={(event) => setDate(event.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItem>
          <ListItem>
            <Select value={place} displayEmpty onChange={(event) => setPlace(event.target.value)}>
              {
                cityService.data.map((el, ind) => <MenuItem value={el} key={ind}>{el}</MenuItem>)
              }
            </Select>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions className="buttons">
        <Button className="cancel" onClick={handleCloseAddTaskDialog}>Отмена</Button>
        <Button className="add" onClick={handleAddTask} disabled={!title || !date || !place}>Добавить</Button>
      </DialogActions>
    </Dialog>
  );
};

export default compose(
  withCityService,
  storeAddTaskDialog
)(AddTaskDialog);