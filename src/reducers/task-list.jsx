const initState = {
    tasks: [
        {
            id: 0,
            title: 'Мероприятие 1',
            date: new Date(2019, 3, 29),
            place: 'Нижний Новгород',
            checked: false,
            show: true
        },
        {
            id: 1,
            title: 'Мероприятие 2',
            date: new Date(2019, 4, 1),
            place: 'Москва',
            checked: false,
            show: true
        }
    ],
    search: '',
    checkedAll: false,
    deleteButtonDisable: true
};

const taskList = (state = initState, { type, payload }) => {

  const addTask = ({ title, date, place }) => {
    const titleInSearch = title.toLowerCase().indexOf(state.search.toLowerCase()) > -1;

    const newTask = {
      id: state.tasks.length,
      title,
      date,
      place,
      checked: false,
      show: titleInSearch ? true : false
    };



    return {
      ...state,
      tasks: [...state.tasks, newTask]
    };
  };

  const deleteTask = () => {
    const newTasks = state.tasks.filter((el) => {
      return !el.checked;
    });

    return {
      ...state,
      tasks: newTasks,
      checkedAll: false,
      deleteButtonDisable: true
    };
  };

  const toogleCheckAllTask = () => {
    const toogleCheck = (value) => {
      const newTasks = state.tasks.map((el) => {
        if (el.show) {
          return  {
            ...el,
            checked: value
          };
        } else {
          return  {
            ...el,
            checked: false
          };
        }
      });

      return {
        tasks: newTasks,
      }
    };

    if (state.checkedAll) {
      return {
        ...state,
        ...toogleCheck(false),
        deleteButtonDisable: true,
        checkedAll: false
      }
    } else {
      return {
        ...state,
        ...toogleCheck(true),
        deleteButtonDisable: false,
        checkedAll: true
      }
    }
  };

  const checkTask = (id) => {
    const newTasks = state.tasks.map((el) => {
      if (el.show) {
        return {
          ...el,
          checked: el.id === id ? !el.checked : el.checked
        };
      } else {
        return {
          ...el,
          checked: false
        };
      }
    });

    const everyChecked = newTasks.every((el) => {
      if (el.show) {
        return el.checked;
      } else {
        return true;
      }
    });

    let checkedControl;

    if (everyChecked) {
      checkedControl = {
        deleteButtonDisable: false,
        checkedAll: true
      }
    } else {
      const someChecked = newTasks.some((el) => {
        if (el.show) {
          return el.checked;
        } else {
          return false;
        }
      });

      if (someChecked) {
        checkedControl = {
          deleteButtonDisable: false,
          checkedAll: false
        }
      } else {
        checkedControl = {
          deleteButtonDisable: true,
          checkedAll: false
        }
      }
    }

    return {
      ...state,
      tasks: newTasks,
      ...checkedControl
    }
  };

  const searchTask = (text) => {
    if (text.length === 0) {
      const newTasks = state.tasks.map((el) => {
        return {
          ...el,
          show: true
        }
      });

      return {
        ...state,
        tasks: newTasks,
        search: text,
      };
    }
    const newTasks = state.tasks.map((el) => {
      const entries = el.title.toLowerCase().indexOf(text.toLowerCase());

      if (entries  > -1) {
        return {
          ...el,
          show: true
        }
      } else {
        return {
          ...el,
          show: false,
          checked: false,
        }
      }
    });

    const someChecked = newTasks.some((el) => {
      return el.show;
    });

    const everyChecked = newTasks.every((el) => {
      return el.show;
    });

    return {
      ...state,
      tasks: newTasks,
      search: text,
      deleteButtonDisable: someChecked ? false : true,
      checkedAll: everyChecked ? true : false
    }
  };

  switch (type) {
    case 'ADD_TASK':
      return addTask(payload);

    case 'DELETE_TASK':
      return deleteTask();

    case 'TOOGLE_CHECK_ALL_TASK':
      return toogleCheckAllTask();

    case 'TOOGLE_CHECK_TASK':
      return checkTask(payload);

    case 'SEARCH_TASK':
      return searchTask(payload);

    default:
      return state;
  }
};

export default taskList;
