import React, { useEffect, useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Todo from './components/Todo/Todo';

const App = () => {
    const list = localStorage.getItem('todos');
    const [todos, setTodos] = useState(list ? JSON.parse(list) : []);
    const createTodo = (todo) => {
        setTodos([...todos, { id: Math.random(), todo }]);
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    return (
        <div className='app'>
            <AddTaskForm createTodo={createTodo} />
            {todos.map(todo => <Todo todo={todo.todo} key={todo.id} />)}
        </div>
    )
}

export default App;