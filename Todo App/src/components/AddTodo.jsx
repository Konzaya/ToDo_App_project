import { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setdueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <IoBagAddOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
