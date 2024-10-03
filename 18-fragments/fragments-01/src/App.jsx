import ErrorMessage from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Roti", "Salad", "GreenVegetable", "Milk", "Ghee"];

  // if (!foodItems.length) {
  //   return <h2>I am Hungry</h2>;
  // }
  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage/>
      <FoodItems/>
      )
    </>
  );
}

export default App;
