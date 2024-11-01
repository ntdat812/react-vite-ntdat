
const TodoData = (props) => {

    const { todoList } = props;
    return (
        <div className="listContainer">
            {todoList.map((item, index) => {
                console.log(item, index);
                return (

                    <div className={`todo-item`} key={item.id}>
                        <div>
                            {item.name}
                        </div>
                        <button
                            className="c"
                        >Delete</button>
                    </div>
                )
            })}
        </div >

    )
}

export default TodoData