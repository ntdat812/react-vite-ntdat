
const TodoNew = (props) => {
    const { addNewTodo } = props;
    //  addNewTodo("dat");

    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (event) => {
        console.log(">>Handle on change", event.target.value)
    }
    return (
        <div className="addContainer">
            <input
                type="text"
                className="input-highlight"
                placeholder="Nhập nội dung"
                onChange={handleOnChange}
            />
            <button
                className="button-add"
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew