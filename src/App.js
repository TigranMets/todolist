import React from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  return (
    <div className='app'>
      <AddTaskForm/>
      <TodoList />
    </div>
  );
}

export default App;
