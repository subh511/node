import styles from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) =>{

return(
  <div>
  <input type="text" placeholder="enter food-item" className={styles.foodInput} onKeyDown={handleKeyDown}/>
  </div>
)
}

export default FoodInput;