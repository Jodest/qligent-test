const initState = {
    tasks: [
        {
            id: 0,
            title: 'Мероприятие 1',
            date: new Date(2019, 3, 29),
            place: 'Нижний Новгород',
            checked: false
        },
        {
            id: 1,
            title: 'Мероприятие 2',
            date: new Date(2019, 4, 1),
            place: 'Москва',
            checked: false
        }
    ]
};

const taskList = (state = initState, {type, payload}) => {

  switch (type) {
    case 'ADD_TASK':
      return;

    case 'REMOVE_TASK':
      return;

    case 'EDIT':
      return;

    default:
      return state;
  }
};

export default taskList;
