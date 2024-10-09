import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMsg";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

import {useState} from "react";

function App() {
  let [foodItems,setFoodItems] = useState([])

  const onKeyDown = (event) =>{
    if(event.key === 'Enter'){
      let newFooditem = event.target.value;
      event.target.value="";
      setFoodItems([...foodItems,newFooditem]);
    }
  }

  return (
    <Container>
      <h1>Healthy Foods</h1>
      <FoodInput handleKeyDown={onKeyDown}/>
      <ErrorMessage foodItems={foodItems}/>
      <FoodItems foodItems={foodItems}/>
    </Container>
  );
}

export default App;
