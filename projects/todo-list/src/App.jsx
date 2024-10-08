import AppName from "./components/AppName";
import SearchComponent from "./components/SearchComponent";

import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center>
      <div className="container">
      <AppName/>
      <SearchComponent/>
      <TodoItem todoDate="4/10/2023" todoName="Buy Milk"/>
      </div>
    </center>
  );
}
export default App;
