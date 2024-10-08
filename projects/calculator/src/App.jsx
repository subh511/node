import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.calculator}>
    <input type="text" className={styles.display}/>
    <div className={styles.button}>
    <button className={styles.buttons}>1</button>
    <button className={styles.buttons}>2</button>
    <button className={styles.buttons}>3</button>
    <button className={styles.buttons}>4</button>
    <button className={styles.buttons}>5</button>
    <button className={styles.buttons}>6</button>
    </div>
    </div>
  )
}

export default App
