import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.button}>
      {buttonNames.map((btn) => (
        // eslint-disable-next-line react/jsx-key
        <button className={styles.buttons}>{btn}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
