
const TodoData = (props) => {

    const { todoList, delTodo } = props;


    const handleClickDelete = (idTodo) => {
        delTodo(idTodo);
    }


    return (
        <div className="listContainer">
            {todoList.map((item, index) => {
                return (

                    <div className={`todo-item`} key={item.id}>
                        <div>
                            {item.name}
                        </div>
                        <button
                            className="button-del"
                            onClick={() => { handleClickDelete(item.id) }}
                        >Delete</button>
                    </div>
                )
            })}
        </div >

    )
}

export default TodoData