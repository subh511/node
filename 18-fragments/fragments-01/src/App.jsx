import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";

function App() {
  // let foodItems = [];
  let foodItems = ["Sabzi", "Roti", "Salad", "GreenVegetable", "Milk", "Ghee"];

  return (
    <Container>
      <h1>Healthy Foods</h1>
      <ErrorMessage foodItems={foodItems}/>
      <FoodItems foodItems={foodItems}/>
    </Container>
  );
}

export default App;
