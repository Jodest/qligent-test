const initState = {
    data: [
      {
        id: 0,
        title: 'Мероприятие 1',
        date: '2019-05-23',
        place: 'Нижний Новгород',
      }, {
        id: 1,
        title: 'Мероприятие 2',
        date: '2019-07-23',
        place: 'Москва',
      },
    ],
    checked: {},
    search: {},
    searchString: ''
  };

  let itemId = 2;

  const tasks = (state = initState, {type, payload}) => {
    const addTask = (task) => {
      const newTask = {
        id: itemId++,
        ...task,
      };

      let newSearch = {};
      if (state.searchString.length !== 0 && task.title.toLowerCase().includes(state.searchString)) {
        newSearch[newTask.id] = true;
      }

      return ({
        ...state,
        data: [...state.data, newTask],
        search: {...state.search, ...newSearch}
      });
    };

    const toggleCheckAllSearched = () => {
      const checkedLength = Object.keys(state.checked).length;
      const searchedLength = Object.keys(state.search).length;

      return (
          searchedLength === checkedLength ? ({...state, checked: {}}) : ({...state, checked: state.search})
      );
    };

    const toggleCheckAll = () => {
      const checkedLength = Object.keys(state.checked).length;
      const tasksLength = Object.keys(state.data).length;

      const checkedAll = state.data.reduce(
          (acc, next) => ({...acc, [next.id]: true}), {});

      return (
          checkedLength === tasksLength ? ({...state, checked: {}}) : ({...state, checked: checkedAll})
      );
    };

    const toggleTask = (id) => {
      const checked = {...state.checked};

      checked[id] ? delete checked[id] : checked[id] = true;

      return ({
        ...state,
        checked,
      });
    };

    const deleteItem = () => {
      const checked = {...state.checked};
      const data = state.data.filter(item => !checked[item.id]);

      return ({
        ...state,
        data,
        checked: {},
      });
    };

    const searchTask = (value) => {
      const search = state.data.reduce((acc, next) => {
        if (next.title.toLowerCase().includes(value.toLowerCase())) {
          return ({...acc, [next.id]: true});
        } else {
          return ({...acc, [next.id]: false});
        }
      }, {});

      return ({
        ...state,
        checked: {},
        search,
        searchString: value || ''
      });
    };

    switch (type) {
      case 'ADD_TASK':
        return addTask(payload);

      case 'DELETE_TASK':
        return deleteItem();

      case 'TOGGLE_CHECK_ALL_TASK':
        return Object.keys(state.search).length
            ? toggleCheckAllSearched()
            : toggleCheckAll();

      case 'TOGGLE_CHECK_TASK':
        return toggleTask(payload);

      case 'SEARCH_TASK':
        return searchTask(payload);

      default:
        return state;
    }
  };

  export default tasks;