import React from 'react';

import Form from './Form';
import List from './List';

export default function Page({ 
  taskTitle, onChangeTitle, onClickAddTask, 
  tasks, onClickDeleteTask 
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Form 
        value={taskTitle} 
        onChange={onChangeTitle} 
        onClick={onClickAddTask}
      />
      <List 
        tasks={tasks} 
        onClickDelete={onClickDeleteTask}
      />
    </div>
  );
}
