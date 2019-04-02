import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { storeAddTaskDialog } from '../hoc';
import { compose } from '../../utils';
// import { closeAddTaskDialog, addTask } from '../../actions';

const AddTaskDialog = (props) => {
// const AddTaskDialog = ({ addTaskDialog: {title, date, place}, closeAddTaskDialog, addTask }) => {
  // const handleCloseAddTaskDialog = () => {
  //   closeAddTaskDialog();
  // };
  // const handleAddTask = () => {
  //   addTask();
  //   closeAddTaskDialog();
  // };

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');

  const cities = [
      'Москва',
      'Санкт-Петербург',
      'Нижний Новгород'
  ];

  return (
    <div>
        <div className="title">Добавление мероприятия</div>
        <div className="form">
          <input type="text" value={title} placeholder="Название" onChange={(event) => setTitle(event.target.value)} />
          <input type="date" value={date} placeholder="Дата" onChange={(event) => setDate(event.target.value)} />
          {/* <input type="select" value={place} placeholder="Город" onChange={(event) => setPlace(event.target.value)} /> */}
          <select value={place} onChange={(event) => setPlace(event.target.value)}>
          {
            cities.map((el, ind) => <option key={ind}>{el}</option>)
          }
          </select>
        </div>
        <div className="buttons">
          {/* <button className="cancel" onClick={handleCloseAddTaskDialog}>Отмена</button> */}
          {/* <button className="add" onClick={handleAddTask}>Добавить</button> */}
        </div>
    </div>
  );
};

export default compose(
  storeAddTaskDialog()
)(AddTaskDialog);