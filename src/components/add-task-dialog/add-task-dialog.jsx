import React, { useState } from 'react';
// import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { storeAddTaskDialog, withCityService } from '../hoc';
import { compose } from '../../utils';

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
      <div className="title">Добавление мероприятия</div>
      <div className="form">
        <Input type="text" value={title} placeholder="Название" onChange={(event) => setTitle(event.target.value)} />
        <Input type="date" value={date} placeholder="Дата" onChange={(event) => setDate(event.target.value)} />
        <Select value={place} displayEmpty onChange={(event) => setPlace(event.target.value)}>
        {
          cityService.data.map((el, ind) => <MenuItem value={el} key={ind}>{el}</MenuItem>)
        }
        </Select>
      </div>
      <div className="buttons">
        <Button className="cancel" onClick={handleCloseAddTaskDialog}>Отмена</Button>
        <Button className="add" onClick={handleAddTask} disabled={!title || !date || !place}>Добавить</Button>
      </div>
    </Dialog>
  );
};

export default compose(
  withCityService,
  storeAddTaskDialog
)(AddTaskDialog);