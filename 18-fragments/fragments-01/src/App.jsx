import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMsg";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

import {useState} from "react";

function App() {
  // let foodItems = [];
  let foodItems = ["Sabzi", "Roti", "Salad", "GreenVegetable", "Milk", "Ghee"];

 // let textToShow = "Food Item Entered by User";

  let [textToShow,setTextState] = useState("Food Item Entered by User");

  const handleOnChange = (event) =>{
    console.log(event.target.value)
    setTextState(event.target.value);
  }

  return (
    <Container>
      <h1>Healthy Foods</h1>
      <ErrorMessage foodItems={foodItems}/>
      <FoodInput handleOnChange={handleOnChange}/>
      <p>{textToShow}</p>
      <FoodItems foodItems={foodItems}/>
    </Container>
  );
}

export default App;
