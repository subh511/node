


const ErrorMessage = ({foodItems}) => {

  return (
    <div>
    {!foodItems.length &&
      <h2>I am Hungry</h2>
    }
    </div>
  )

}

export default ErrorMessage;