import React, { useState } from 'react';
import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import { storeAddTaskDialog, withCityService } from '../hoc';
// import { compose } from '../../utils';

const AddTaskDialog = ({ addTaskDialog, addTask, closeAddTaskDialog, cityService }) => {
  const handleCloseAddTaskDialog = () => {
    closeAddTaskDialog();
  };
  const handleAddTask = () => {
    addTask({ title, date, place });
    closeAddTaskDialog();
  };

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');

  return (
    <Dialog open={addTaskDialog.show}>
      <DialogTitle className="title">Добавление мероприятия</DialogTitle>
      <DialogContent className="form">
        <Input type="text" value={title} placeholder="Название" onChange={(event) => setTitle(event.target.value)} />
        {/* <Input type="date" value={date} placeholder="Дата" onChange={(event) => setDate(event.target.value)} /> */}
        <TextField
          id="date"
          type="date"
          value={date}
          placeholder="Дата" 
          onChange={(event) => setDate(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select value={place} displayEmpty onChange={(event) => setPlace(event.target.value)}>
        {
          cityService.data.map((el, ind) => <MenuItem value={el} key={ind}>{el}</MenuItem>)
        }
        </Select>
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