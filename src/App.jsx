import "./components/todo/todo.css"
import TodoNew from "./components/todo/ToDoNew"
import reactLogo from "./assets/react.svg"
import TodoData from "./components/todo/ToDoData"

const App = () => {

  const ntdat = "NguyenThanhDat";
  const age = 21;
  const data = {
    address: "thanhhoa",
    country: "vietnam"
  }
  return (
    <>
      <div className="todoContainer">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData
          name={ntdat}
          age={age}
          data={data}
        />
        <div className="todo-image"><img src={reactLogo} className="logo" /></div>
      </div>

    </>
  )
}

export default App
