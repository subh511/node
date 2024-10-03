function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Roti", "Salad", "GreenVegetable", "Milk", "Ghee"];

  // if (!foodItems.length) {
  //   return <h2>I am Hungry</h2>;
  // }
  return (
    <>
      <h1>Healthy Foods</h1>
      {!foodItems.length ? (
        <h2>I am Hungry</h2>
      ) : (
        <ul className="list-group">
          {foodItems.map((food) => (
            <li className="list-group-item" key={food}>
              {food}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
