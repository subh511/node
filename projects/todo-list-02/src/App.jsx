import AppName from "./components/AppName";
import SearchComponent from "./components/SearchComponent";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

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

  return (
    <center>
      <div className="container">
        <AppName />
        <SearchComponent handleNewItem={handleNewItem} />
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}
export default App;
