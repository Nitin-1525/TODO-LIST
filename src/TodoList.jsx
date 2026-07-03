import  { useState } from 'react';
import "./TodoList.css";

import {v4 as uuidv4} from 'uuid';  

export default function TodoList() {
    let [todos, setTOdos] = useState([{task:"sample Task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");


    let addnewTodo = () => {
        console.log("Adding new todo:", newTodo);
        setTOdos([...todos, {task:newTodo, id:uuidv4()}]);
        setNewTodo("");
    }
    let updateTodoValue = (e) => {
        setNewTodo(e.target.value);
    }

    let deleteTodo = (id) => {
        // const idToDelete = e.target.parentElement.key;
        setTOdos(todos.filter((todo) => todo.id !== id));
        
    }

    let upperCaseAll = () => {
        setTOdos ( (prevTodos) => prevTodos.map((todo) => {
            return { ...todo, task: todo.task.toUpperCase(), 
        };
    })
    )
    };
    let UpperCaseOne = (id) => {
        setTOdos ( (prevTodos) =>
             prevTodos.map((todo) => {
            if (todo.id == id) {
            return { ...todo, task: todo.task.toUpperCase(), 
        };
        } else {
            return todo;
            }
         
    })
    )
    };
  return (

    <div> 
    <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} ></input>
    <br />
    <br />
    <button onClick={addnewTodo} >Add Task</button>
    <br />
    <br />
    <hr /> 
     <h2>Tasks TODO</h2>
     <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                <span>{todo.task}</span>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => UpperCaseOne(todo.id)}>UpperCaseOne</button>
                </li> 
            ))}
     </ul>
     <br />
    <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
}