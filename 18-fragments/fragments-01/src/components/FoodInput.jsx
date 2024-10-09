import styles from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) =>{

return(
  <div>
  <input type="text" placeholder="enter fooditem here" className={styles.foodInput} onKeyDown={handleKeyDown}/>
  </div>
)
}

export default FoodInput;