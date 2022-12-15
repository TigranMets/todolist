import React, { useEffect, useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Todo from './components/Todo/Todo';

const App = () => {
    const list = localStorage.getItem('todos');
    const [todos, setTodos] = useState(list ? JSON.parse(list) : []);

    const createTodo = (todo) => {
        setTodos([...todos, { id: Math.random(), todo, isCompleted: false }]);
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const completeTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return todo;
        }));
    };

    return (
        <div className='app'>
            <AddTaskForm createTodo={createTodo} />
            {todos.map(todo => <Todo todo={todo.todo} key={todo.id} id={todo.id} deleteTodo={deleteTodo} isCompleted={todo.isCompleted} completeTodo={completeTodo} />)}
        </div>
    )
}

export default App;