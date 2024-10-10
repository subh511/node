import styles from "./Display.module.css";

function Display({ calValue }) {
  return (
    <div>
      <input type="text" className={styles.display} value={calValue} readOnly/>
    </div>
  );
}

export default Display;
