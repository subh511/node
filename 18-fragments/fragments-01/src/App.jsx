import React from "react";


function App() {

  let foodItems = [
    'Dal',
    'Roti',
    'Salad',
    'GreenVegetable',
    'Milk',
    'Ghee'
  ]
  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
      {
        foodItems.map((food)=>
          <li className="list-group-item">{food}</li>
       )
      }
      </ul>
    </>
  );
}

export default App;
