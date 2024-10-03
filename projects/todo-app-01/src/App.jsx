import AppName from "./components/AppName";
import DeleteItems from "./components/DeleteItems";
import SearchComponent from "./components/SearchComponent";

import "./App.css";

function App() {
  return (
    <center>
      <div className="container">
      <AppName/>
      <SearchComponent/>
      <DeleteItems/>
      </div>
    </center>
  );
}
export default App;
