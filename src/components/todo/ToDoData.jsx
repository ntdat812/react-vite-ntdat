
const TodoData = (props) => {

    const { name, age, data } = props;
    console.log("Props: ", props);
    return (
        <div className="listContainer">
            <div className="todo-item">My name is: {name}</div>
            <div className="todo-item">Learning React</div>
            <div className="todo-item">Watching youtube</div>
            <div>
                {
                    JSON.stringify(props.todoList)
                }
            </div>
        </div>

    )
}

export default TodoData