import {useState} from "react";
import { MdAddCircleOutline } from "react-icons/md";
function SearchComponent({handleNewItem}) {

  const [todoName,setTodoName] = useState("");
  const [dueDate,setDueDate] = useState("");

  const handleNameChange = (event) =>{
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) =>{
    setDueDate(event.target.value)
  }

  const handleAddButtonClicked = () =>{
    handleNewItem(todoName,dueDate)
    setDueDate("");
    setTodoName("");
  }

  return (
    <>
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here"
          value={todoName} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success" onClick={handleAddButtonClicked}>
          <MdAddCircleOutline />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchComponent;