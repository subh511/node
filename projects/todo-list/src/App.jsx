import AppName from "./components/AppName";
import SearchComponent from "./components/SearchComponent";

import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems= [{
    name:"Buy Milk",
    date: "4/10/23"
  },{
    name: "Go to college",
    date: "4/10/23"
  },{
    name:"Go To Youtube",
    date: "Right Now"
  }]
  return (
    <center>
      <div className="container">
      <AppName/>
      <SearchComponent/>
      <TodoItems todoItems={todoItems}/>
      </div>
    </center>
  );
}
export default App;
