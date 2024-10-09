import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMsg";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

import {useState} from "react";

function App() {
  let [foodItems,setFoodItems] = useState(["Salad", "Roti","GreenVegetable"])

  const onKeyDown = (event) =>{
    if(event.key === 'Enter'){
      let newFooditem = event.target.value;
     // let newItems = [...foodItems,newFooditem];
      setFoodItems([...foodItems,newFooditem]);
    }
  }

  return (
    <Container>
      <h1>Healthy Foods</h1>
      <ErrorMessage foodItems={foodItems}/>
      <FoodInput handleKeyDown={onKeyDown}/>
      <FoodItems foodItems={foodItems}/>
    </Container>
  );
}

export default App;
