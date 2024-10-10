import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

import { useState } from "react";
function App() {
  let [calValue, setCalValue] = useState("");

  function onButtonClick(btnText) {
    if (btnText === "C") {
      setCalValue("");
    } else if (btnText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + btnText;
      setCalValue(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display calValue={calValue} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
