import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, handleDeleteItems }) => {
  return (
    <div>
      {
        // eslint-disable-next-line react/jsx-key
        todoItems.map((item) => (
          <TodoItem
            key={item}
            todoDate={item.date}
            todoName={item.name}
            handleDeleteItems={handleDeleteItems}
          />
        ))
      }
    </div>
  );
};

export default TodoItems;
