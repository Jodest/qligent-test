import React from 'react';
import {connect} from 'react-redux';

import TaskItem from '../task-item';
import { toggleCheckAllTask } from '../../actions';

import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const TaskBlock = ({ tasks, toggleCheckAllTask }) => {
  const handleToggleCheckAllTask = () => {
    toggleCheckAllTask();
  };

  const lengthCheckedId = Object.keys(tasks.checked).length;
  const lengthSearchedId = Object.keys(tasks.search).length;

  const isCheckedAll = Boolean(
    (lengthCheckedId && lengthCheckedId === tasks.data.length)
    || (lengthSearchedId && lengthCheckedId === lengthSearchedId),
  );

  const renderRows = () =>
    lengthSearchedId
        ? tasks.data.filter((item) => tasks.search[item.id]).map(item => <TaskItem item={item} key={item.id}/>)
        : tasks.data.map((item) => <TaskItem item={item} key={item.id}/>);

  return (
    // <Table className="table">
    //   <TableHead>
    //     <TableRow>
    //       <TableCell>
    //         <Checkbox onChange={handleToggleCheckAllTask} checked={isCheckedAll} />
    //       </TableCell>
    //       <TableCell>Название</TableCell>
    //       <TableCell>Дата</TableCell>
    //       <TableCell>Место проведения</TableCell>
    //     </TableRow>
    //   </TableHead>

    //   <TableBody>
    //     {renderRows()}
    //   </TableBody>
    // </Table>
    <List>
      <ListSubheader>
        <Checkbox onChange={handleToggleCheckAllTask} checked={isCheckedAll} />
        <ListItemText>
          Название
        </ListItemText>
        <ListItemText>
          Дата
        </ListItemText>
        <ListItemText>
          Место проведения
        </ListItemText>
      </ListSubheader>
      {renderRows()}
    </List>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = {
  toggleCheckAllTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskBlock);
