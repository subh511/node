import styles from "./FoodInput.module.css";

const FoodInput = () =>{

  const handleInputChange = (event)=>{
    console.log(event.target.value)
  }
return(
  <div>
  <input type="text" placeholder="enter fooditem here" className={styles.foodInput} onChange={handleInputChange}/>
  </div>
)
}

export default FoodInput;