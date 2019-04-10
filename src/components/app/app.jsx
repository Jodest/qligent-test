import React, { Fragment } from 'react';

import Header from '../header-app';
import TaskBlock from '../task-block';
import AddTaskDialog from '../add-task-dialog';
import DeleteTaskDialog from '../delete-task-dialog';

const App = () => {
  return (
    <Fragment>
      <AddTaskDialog />
      <DeleteTaskDialog />
      <Header />
      <main role="main" className="container">
        <TaskBlock />
      </main>
    </Fragment>
  );
};

export default App;