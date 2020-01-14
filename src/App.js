import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld";


function Affichage(props) {
return <h1>Toto, {props.azerty}</h1>
}

function Item(props) {
  return ( <div onClick={props.onClick}>
  <input type="checkbox" checked={props.checked} value={props.checked} onChange={()=>{}}/>
  <span >{props.label}</span>
</div>);
}

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
    <Affichage azerty="kikou" />
    <hr/>
    {todos
      .filter(todo => todo.done === false)
      .map(todo => {
        return (
          <Item label={todo.label} onClick={() => done(todo.id)} checked={true}/>
        ); 
      })
    }
    <hr/>
    {todos
      .filter(todo => todo.done === true)
      .map(todo => {
        return <Item label={todo.label} onClick={() => undone(todo.id)} />
      })
    }
  </div>

}


export default App;
