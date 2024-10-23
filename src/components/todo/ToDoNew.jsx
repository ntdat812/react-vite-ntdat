
const TodoNew = (props) => {
    const { addNewTodo } = props;
    addNewTodo("dat");
    return (
        <div className="addContainer">
            <input type="text" className="input-highlight" placeholder="Nhập nội dung" />
            <button className="button-add">Add</button>
        </div>
    )
}

export default TodoNew