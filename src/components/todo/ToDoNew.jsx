import { useState } from "react";

const TodoNew = (props) => {

    //useState hook
    //const valueInput = "dat";
    const [valueInput, setValueInput] = useState("eric")


    const { addNewTodo } = props;
    //  addNewTodo("dat");

    const handleClick = () => {
        console.log("check valueInput:", valueInput)
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
            />
            <button
                className="button-add"
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew