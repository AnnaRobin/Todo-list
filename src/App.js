import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld";




function Affichage1(props) {
return <h1>To do, {props.azerty}</h1>
}

function Affichage2(props) {
  return <h1>Done, {props.ytreza}</h1>
  }

function Item(props) {
  return ( <div onClick={props.onClick}>
  <input type="checkbox" checked={props.checked} value={props.checked} onChange={()=>{}}/>
  <span >{props.label}</span>
</div>);
}

function List(props) {
  const [items, setItems] = React.useState(init);

  const done = (id,checked) => {
    setItems(state => {
       return state.map(item => {
         console.log(item);
         if (item.id !== id) return item;
         return {...item, done: !checked};
       });
     });
   }

  return <div><h1>{props.title}</h1>
          <div>
            {items
              .filter(item => item.done === props.checked)
              .map(item => {
                return (
                  <Item key={item.id} label={item.label} onClick={() => done(item.id,props.checked)} checked={props.checked} />
                ); 
              })
            }
          </div>
        </div>
}

const init = [
  {id:1, label: 'java', done:false},
  {id:2, label: 'javascript', done:false},
  {id:3, label: 'react', done:false},
  {id:4, label: 'node', done:true},
]

function App() {
  return <div>
          <List title="ToDo, à faire" todos={init} checked={false}/>
          <List title="Done, fait" todos={init} checked={true}/>
        </div>
  /*
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
    <Affichage1 azerty="à faire" />
    <hr/>
    {todos
      .filter(todo => todo.done === false)
      .map(todo => {
        return (
          <Item label={todo.label} onClick={() => done(todo.id)} />
        ); 
      })
    }
    <hr/>
    <Affichage2 ytreza="fait" />
    {todos
      .filter(todo => todo.done === true)
      .map(todo => {
        return <Item label={todo.label} onClick={() => undone(todo.id)} checked={true}/>
      })
    }
  </div>
*/
}


export default App;
