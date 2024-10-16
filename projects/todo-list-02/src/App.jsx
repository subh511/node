import AppName from "./components/AppName";
import SearchComponent from "./components/SearchComponent";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center>
      <div className="container">
        <AppName />
        <SearchComponent handleNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems
          handleDeleteItems={handleDeleteItems}
          todoItems={todoItems}
        />
      </div>
    </center>
  );
}
export default App;
