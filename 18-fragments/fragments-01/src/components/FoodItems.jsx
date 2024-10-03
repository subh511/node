import Items from "./Item";


const FoodItems = ({foodItems})=>{

  return (
    <ul className="list-group">
    {foodItems.map((food) => (
      <Items foodItems={food} key={food}/>
    ))}
  </ul>
  )
}

export default FoodItems;