import ErrorMessage from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";

function App() {
  // let foodItems = [];
  let foodItems = ["Sabzi", "Roti", "Salad", "GreenVegetable", "Milk", "Ghee"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage foodItems={foodItems}/>
      <FoodItems foodItems={foodItems}/>
    </>
  );
}

export default App;
