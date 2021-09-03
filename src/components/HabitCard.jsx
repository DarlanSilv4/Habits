import styles from "../styles/components/HabitCard.module.css";
import IconSvg from "./IconSvg";
import cx from "classnames";

function HabitCard({
  name,
  isConcluded,
  isFullWidth,
  handleCompleteHabit,
  handleStreak,
}) {
  const habitCardStyle = cx(
    styles.card,
    { [styles.concluded]: isConcluded },
    { [styles.cardFullWidth]: isFullWidth }
  );

  return (
    <div className={habitCardStyle}>
      <div className={styles.iconWrapper}>{/*Icon*/}</div>
      <p>{name}</p>
      {isConcluded ? (
        <button
          title="Mark as unfinished"
          className={styles.undoButton}
          onClick={() => {
            handleStreak.undoUpdateStreak();
            handleCompleteHabit();
          }}
        >
          <IconSvg icon="undo" height="32" width="32" color="#FFFFFF" />
        </button>
      ) : (
        <button
          title="Mark as finish"
          className={styles.checkButton}
          onClick={() => {
            handleStreak.updateStreak();
            handleCompleteHabit();
          }}
        >
          <IconSvg icon="check" height="32" width="32" color="#666666" />
        </button>
      )}
    </div>
  );
}

export default HabitCard;
