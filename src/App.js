import "./App.css"
import { Button, Input } from './components';
import React from 'react'
function App() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([])
  const addTodo = () => {
    let arr = [...todos];
    arr.push(value)
    setTodos(arr)
    setValue("")
  }

  const deleteTodo = (i) => {
    let arr = [...todos];
    arr.splice(i, 1)
    setTodos(arr)
  }
  const deAll = ()=>{
    let del = [...todos]
    del = [" "]
  }
  return (
    <div className = "top" >
      <div className = "widt">
        <h1>Todo App</h1>
      <Input className="input" value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter value" />
      <Button  className="btn " onClick={addTodo}>Add</Button> <Button lassName="btn" onClick={deAll}>Delete All </Button>
      <ul>
        {todos.map((v, i) => {
          return <li className ="todos" key={i}>{v} <Button onClick={() => deleteTodo(i)}>Delete</Button></li>
        })}
      </ul>
      </div>
    </div>
  )
}





export default App;
