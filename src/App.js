import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld";

const init = [
  {id:1, label: 'todo1', done:false},
  {id:2, label: 'todo2', done:false},
  {id:3, label: 'todo3', done:false},
  {id:4, label: 'todo4', done:true},
]

function App() {
  const [todos, setTodos] = React.useState(init);
 
  console.log("RENDER")

  const done = (id) => {
    setTodos(state => {
      return state.map(todo => {
        if (todo.id !== id) return todo;
        return {...todo, done: true};
      });
    });
  }
  const undone = (id) => {
    setTodos(state => {
    return state.map(todo => {
      if (todo.id !== id) return todo;
      return {...todo, done: false};
    });
  });
  }
  return <div>
    {todos.filter(todo => todo.done === false).map((todo, index) => <div onClick={() => done(todo.id)}>{todo.label}</div>)}
    <br/>
    {todos.filter(todo => todo.done === true).map((todo,index) => <div onClick={() => undone(todo.id)}>{todo.label}</div>)}
  </div>
  
}

export default App;
