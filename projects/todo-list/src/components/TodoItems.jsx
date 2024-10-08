import TodoItem from "./TodoItem";

const TodoItems = ({todoItems})=>{

  return (
  <div>
  {
    // eslint-disable-next-line react/jsx-key
    todoItems.map((item)=><TodoItem todoDate={item.date} todoName={item.name}/>)
  }
  </div>
  )
}

export default TodoItems;