import { useState } from "react";

const TodoNew = (props) => {

    //useState hook
    //const valueInput = "dat";
    const [valueInput, setValueInput] = useState("eric")


    const { addNewTodo } = props;
    //  addNewTodo("dat");

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className="addContainer">
            <input
                type="text"
                className="input-highlight"
                placeholder="Nhập nội dung"
                onChange={(event) => { handleOnChange(event.target.value) }}
                value={valueInput}
            />
            <button
                className="button-add"
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew