import "./components/todo/todo.css"
import TodoNew from "./components/todo/ToDoNew"
import reactLogo from "./assets/react.svg"
import TodoData from "./components/todo/ToDoData"
import { useState } from "react"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import { Outlet } from "react-router-dom"

const App = () => {

  const [todoList, setTodoList] = useState([]);



  const addNewTodo = (name) => {
    const newTodo = {
      id: ramdomIntFromInterval(1, 1000000),
      name: name
    }
    //copy du lieu cu va them du lieu moi vao cuoi
    setTodoList([...todoList, newTodo])
  }

  const delTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo)
  }

  const ramdomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <Header />
      <div className="todoContainer">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />

        {todoList.length > 0 ?
          <TodoData
            delTodo={delTodo}
            todoList={todoList}
          />
          :
          <div className="todo-image">
            <img src={reactLogo} className="logo" />
          </div>
        }

      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
