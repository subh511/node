


const ErrorMessage = () => {

  let foodItems = ["Dal", "Roti", "Salad", "GreenVegetable", "Milk", "Ghee"];

  return (
    <div>
    {!foodItems.length &&
      <h2>I am Hungry</h2>
    }
    </div>
  )

}

export default ErrorMessage;