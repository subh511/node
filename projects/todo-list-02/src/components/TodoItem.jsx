import { MdDeleteOutline } from "react-icons/md";

function TodoItem({ todoDate, todoName, handleDeleteItems }) {
  return (
    <>
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={()=>handleDeleteItems(todoName)}
          >
          <MdDeleteOutline />
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>
      </div>
    </>
  );
}

export default TodoItem;
