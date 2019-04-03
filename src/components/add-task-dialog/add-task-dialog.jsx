import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { storeAddTaskDialog } from '../hoc';

const AddTaskDialog = ({ addTaskDialog, addTask, closeAddTaskDialog }) => {
  const handleCloseAddTaskDialog = () => {
    closeAddTaskDialog();
  };
  const handleAddTask = () => {
    addTask({ title, date, place });
    closeAddTaskDialog();
  };

  // console.log(addTask, closeAddTaskDialog);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');

  const cities = [
      'Москва',
      'Санкт-Петербург',
      'Нижний Новгород'
  ];

  return (
    <Dialog open={addTaskDialog.show}>
      <div className="title">Добавление мероприятия</div>
      <div className="form">
        <Input type="text" value={title} placeholder="Название" onChange={(event) => setTitle(event.target.value)} />
        <Input type="date" value={date} placeholder="Дата" onChange={(event) => setDate(event.target.value)} />
        {/* <input type="select" value={place} placeholder="Город" onChange={(event) => setPlace(event.target.value)} /> */}
        <Select value={place} displayEmpty onChange={(event) => setPlace(event.target.value)}>
        {
          cities.map((el, ind) => <MenuItem value={el} key={ind}>{el}</MenuItem>)
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

export default storeAddTaskDialog(AddTaskDialog);