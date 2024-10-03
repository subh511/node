import AppName from "./components/AppName";
import DeleteItems from "./components/DeleteItems";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <center>
    <AppName/>
      <div className="container text-center">
      <SearchComponent/>
      <br/>
      <DeleteItems/>
      </div>
    </center>
  );
}
export default App;
