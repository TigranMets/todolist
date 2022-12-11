import React from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import ConfirmationModal from './components/ConfirmationModal/ConfirmationModal';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  return (
    <div className='app'>
      <AddTaskForm/>
      <TodoList />
      <ConfirmationModal />
    </div>
  );
}

export default App;
