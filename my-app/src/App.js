import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = response.json()
    setTodos(responseJSON)
}
useEffect(() =>{
  fetchApi()
})
  return (
    <div className="App">
        {!todos ? 'cargando..':
        todos.map((todo,index)=>{
          return <li>{todo.title}</li>
        }
        )
        }
    </div>
  );
}

export default App;
