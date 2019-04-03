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
    ],
    search: '',
    checkedAll: false,
    deleteButtonDisable: true
};

const taskList = (state = initState, {type, payload}) => {

  const addTask = ({ title, date, place }) => {
    const tasks = JSON.parse(JSON.stringify(state));

    tasks.tasks.push({
      id: tasks.tasks.length,
      title,
      date,
      place,
      checked: false
    });

    return tasks;
  };

  const deleteTask = () => {
    const tasks = JSON.parse(JSON.stringify(state));

    const newState = {
      tasks: [],
      search: '',
      checkedAll: false,
      deleteButtonDisable: true
    };

    tasks.tasks.forEach((el) => {
      if (!el.checked) {
        newState.tasks.push(el);
      }
    });

    return newState;
  };

  const checkAllTask = () => {
    const tasks = JSON.parse(JSON.stringify(state));

    if (tasks.checkedAll) {
      tasks.checkedAll = false;

      tasks.tasks.forEach((el) => {
          el.checked = false;
      });
      tasks.deleteButtonDisable = true;
    } else {
      tasks.checkedAll = true;

      tasks.tasks.forEach((el) => {
          el.checked = true;
      });
      tasks.deleteButtonDisable = false;
    }

    return tasks;
  };

  const checkTask = (id) => {
    const tasks = JSON.parse(JSON.stringify(state));

    tasks.tasks.forEach((el) => {
      if (el.id === id) {
        el.checked = !el.checked;
      }
    });

    const everyChecked = tasks.tasks.every((el) => {
      return el.checked;
    });

    if (everyChecked) {
      tasks.checkedAll = true;
      tasks.deleteButtonDisable = false;
    } else {
      tasks.checkedAll = false;
      const someChecked = tasks.tasks.some((el) => {
        return el.checked;
      });
      if (someChecked) {
        tasks.deleteButtonDisable = false;
      } else {
        tasks.deleteButtonDisable = true;
      }
    }

    return tasks;
  };

  const searchTask = (text) => {
    const tasks = JSON.parse(JSON.stringify(state));

    tasks.search = text;

    return tasks;
  };

  switch (type) {
    case 'ADD_TASK':
      return addTask(payload);

    case 'DELETE_TASK':
      return deleteTask();

    case 'TOOGLE_CKECK_ALL_TASK':
      return checkAllTask();

    case 'TOOGLE_CKECK_TASK':
      return checkTask(payload);

    case 'SEARCH_TASK':
      return searchTask(payload);

    default:
      return state;
  }
};

export default taskList;
