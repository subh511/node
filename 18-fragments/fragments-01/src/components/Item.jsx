// import { useState } from "react";
import styles from "./Item.module.css";

function Items({foodItems}){

  return <li  className="list-group-item">
  {foodItems}
  <button className={styles.button}>Buy</button>
</li>
}

export default Items;