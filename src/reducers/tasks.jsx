const initState = {
    // Data of tasks
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
    // Hold id's of checked items
    checked: {},
    // Hold id's of searched items
    search: {},
  };

  // [NOTE] Crutch to handle ID for tasks.
  let taskId = 2;

  const tasks = (state = initState, {type, payload}) => {

    const addTask = (task) => {
      // Create new task.
      const newTask = {
        id: taskId++,
        ...task,
      };

      return ({
        ...state,
        // Create new array tasks and add new task.
        data: [...state.data, newTask],
      });
    };

    const toggleCheckAllSearched = () => {
      const checkedLength = Object.keys(state.checked).length;
      const searchedLength = Object.keys(state.search).length;

      return (
          // Is all searched items checked?
          searchedLength === checkedLength
              // Reset checked.
              ? ({...state, checked: {}})
              // Else make all founded items checked
              : ({...state, checked: state.search})
      );
    };

    const toggleCheckAll = () => {
      const checkedLength = Object.keys(state.checked).length;
      const tasksLength = Object.keys(state.data).length;

      const checkedAll = state.data.reduce(
          (acc, next) => ({...acc, [next.id]: true}), {});

      return (
          // Is all items checked?
          checkedLength === tasksLength
              // Return empty checked list (reset checked list).
              ? ({...state, checked: {}})
              // Else make all items checked and return this new checked list.
              : ({...state, checked: checkedAll})
      );
    };

    const toggleTask = (id) => {
      // Make copy of checked list.
      const checked = {...state.checked};

      // Is item checked?
      checked[id]
          // Delete this item from list of checked.
          ? delete checked[id]
          // Else set this item into checked list.
          : checked[id] = true;

      return ({
        ...state,
        checked,
      });
    };

    const deleteItem = () => {
      const checked = {...state.checked};
      // Create new data with all unchecked items.
      const data = state.data.filter(item => !checked[item.id]);

      return ({
        ...state,
        data,
        // Reset checked list.
        checked: {},
      });
    };

    const searchTask = (value) => {
      // Find items
      // and create new search list that holds founded items id's.
      console.log(value)
      const search = state.data.reduce((acc, next) =>
              // Is title or place has value?
              next.title.includes(value) || next.place.includes(value)
                  // Add founded item into list.
                  ? ({...acc, [next.id]: true})
                  // Else move to next item.
                  : acc
          , {});

      return ({
        ...state,
        // Reset checked list.
        checked: {},
        search,
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