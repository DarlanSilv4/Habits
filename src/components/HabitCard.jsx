import { useState } from "react";
import styles from "../styles/components/HabitCard.module.css";
import IconSvg from "./IconSvg";

function HabitCard(props) {
  const [isConcluded, setIsConcluded] = useState(false);

  return (
    <div
      className={
        isConcluded ? `${styles.card} ${styles.concluded}` : styles.card
      }
    >
      <div className={styles.iconWrapper}>{/*Icon*/}</div>
      <p>{props.name}</p>
      {isConcluded ? (
        <button title="Mark as unfinished" className={styles.undoButton}>
          <IconSvg icon="undo" height="32" width="32" color="#FFFFFF" />
        </button>
      ) : (
        <button title="Mark as finish" className={styles.checkButton}>
          <IconSvg icon="check" height="32" width="32" color="#666666" />
        </button>
      )}
    </div>
  );
}

export default HabitCard;
