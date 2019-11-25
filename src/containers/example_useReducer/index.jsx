import React, { useState, useReducer } from 'react';
import uuid from 'uuid/v4';
import { dispatch } from 'C:/Users/hx_mi/AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs';

const initialTodos = [
    {
        id: uuid(),
        task: 'Learn React',
        complete: true,
    },
    {
        id: uuid(),
        task: 'Learn Firebase',
        complete: true,
    },
    {
        id: uuid(),
        task: 'Learn React Hook',
        complete: false,
    }, 
    {
        id: uuid(),
        task: 'Learn Mobx using Hooks',
        complete: false
    }
];

// A reducer function always receives the current state and an action as arguments. 
// Depending on the mandatory type of the action, it decides what task to perform in the switch case statement, 
// and returns a new state based on the implementation details
const filterReducer = (state, action) => {
    console.log('[action] ', action);
    switch(action.type) {
        case 'SHOW_ALL':
            return 'ALL';
        case 'SHOW_COMPLETE':
            return 'COMPLETE';
        case 'SHOW_INCOMPLETE':
            return 'INCOMPLETE';
        default:
            throw new Error();
    };
}

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'DO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: true};
                } else {
                    return todo;
                }
            });
        case 'UNDO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: false};
                } else {
                    return todo;
                }
            });
        case 'ADD_TODO':
            return state.concat({
                id: action.id,
                task: action.task,
                complete: false,
            });
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error();
    }
}

/**
 * The useState hook is great to manage simple state. 
 * However, once you run into more complex state objects or state transitions 
 *      -- which you want to keep maintainable and predictable --, 
 * the useReducer hook is then a great candidate to manage them
 */

const ExampleUseReducer = () => {
    // const [todos, setTodos] = useState(initialTodos);
    const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
    const [task, setTask] = useState('');

    // useReducer takes a reducer function and an initial state
    const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');

    const taskOnChange = event => {
        setTask(event.target.value);
    }
    const handleChangeCheckbox = todo => { 
        dispatchTodos({
            type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
            id: todo.id,
        });
    };
    const addNewTodo = event => {
        if (task) {
            dispatchTodos({ type: 'ADD_TODO', id: uuid(), task });
        }
        setTask('');
        event.preventDefault();
    }
    const removeTodo = id => {
        dispatchTodos({ type: 'REMOVE_TODO', id });
    }

    const handleShowAll = () => {
        dispatchFilter({ type: 'SHOW_ALL' });
    };
    const handleShowComplete = () => {
        dispatchFilter({ type: 'SHOW_COMPLETE' });
    };
    const handleShowIncomplete = () => {
        dispatchFilter({ type: 'SHOW_INCOMPLETE' });
    };

    
    const filteredTodos = todos.filter(todo => {
        if (filter === 'ALL') {
          return true;
        }
        if (filter === 'COMPLETE' && todo.complete) {
          return true;
        }
        if (filter === 'INCOMPLETE' && !todo.complete) {
          return true;
        }
        return false;
    });

    return (
        <div>
            <form onSubmit={addNewTodo}>
                <input 
                    type="text"
                    value={task}
                    onChange={taskOnChange}
                />
                <button type="submit">Add new todo</button>
            </form>
            <br />
            <div>
                <button type="button" onClick={handleShowAll}>
                    Show All
                </button>
                <button type="button" onClick={handleShowComplete}>
                    Show Complete
                </button>
                <button type="button" onClick={handleShowIncomplete}>
                    Show Incomplete
                </button>
            </div>

            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={todo.complete}
                                onChange={() => handleChangeCheckbox(todo)}
                            />
                            {todo.task}
                            {' '}------------ 
                            <button type="button" onClick={() => removeTodo(todo.id)}>Remove</button>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExampleUseReducer;