
const TodoData = (props) => {

    const { todoList } = props;
    console.log("Props todolist: ", todoList);
    return (
        <div className="listContainer">
            {todoList.map((item, index) => {
                console.log(item, index);
                return (

                    <div className="todo-item">
                        <div>

                        </div>
                        {item.name}
                        <button
                            className="c"
                        >Delete</button>
                    </div>
                )
            })}
            <div>
                {
                    JSON.stringify(props.todoList)
                }
            </div>
        </div >

    )
}

export default TodoData