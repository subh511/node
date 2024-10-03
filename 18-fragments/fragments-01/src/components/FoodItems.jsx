

const FoodItems = ()=>{

  let foodItems = ["Dal", "Roti", "Salad", "GreenVegetable", "Milk", "Ghee"];

  return (
    <ul className="list-group">
    {foodItems.map((food) => (
      <li className="list-group-item" key={food}>
        {food}
      </li>
    ))}
  </ul>
  )
}

export default FoodItems;