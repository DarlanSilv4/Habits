import styles from "../styles/components/HabitCard.module.css";
import IconSvg from "./IconSvg";

function HabitCard({ name, isConcluded, handleCompleteHabit }) {
  return (
    <div
      className={
        isConcluded ? `${styles.card} ${styles.concluded}` : styles.card
      }
    >
      <div className={styles.iconWrapper}>{/*Icon*/}</div>
      <p>{name}</p>
      {isConcluded ? (
        <button
          title="Mark as unfinished"
          className={styles.undoButton}
          onClick={handleCompleteHabit}
        >
          <IconSvg icon="undo" height="32" width="32" color="#FFFFFF" />
        </button>
      ) : (
        <button
          title="Mark as finish"
          className={styles.checkButton}
          onClick={handleCompleteHabit}
        >
          <IconSvg icon="check" height="32" width="32" color="#666666" />
        </button>
      )}
    </div>
  );
}

export default HabitCard;
