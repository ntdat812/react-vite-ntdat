import "./components/todo/todo.css"
import TodoNew from "./components/todo/ToDoNew"
import reactLogo from "./assets/react.svg"
import TodoData from "./components/todo/ToDoData"
import { useState } from "react"

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Learning Youtube" },
  ])

  const ntdat = "NguyenThanhDat";
  const age = 21;
  const data = {
    address: "thanhhoa",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  return (
    <>
      <div className="todoContainer">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={ntdat}
          age={age}
          data={data}
          todoList={todoList}
        />
        <div className="todo-image"><img src={reactLogo} className="logo" /></div>
      </div>

    </>
  )
}

export default App
