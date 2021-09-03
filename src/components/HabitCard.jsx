import styles from "../styles/components/HabitCard.module.css";
import IconSvg from "./IconSvg";
import cx from "classnames";
import { Route } from "react-router-dom";

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
      <Route path="/app">
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
      </Route>
      <Route path="/habits">
        <div className={styles.buttonGroup}>
          <button title="Edit" className={styles.editButton} onClick={() => {}}>
            <IconSvg icon="edit" height="28" width="28" color="#666666" />
          </button>
          <button
            title="Delete"
            className={styles.deleteButton}
            onClick={() => {}}
          >
            <IconSvg icon="delete" height="28" width="28" color="#666666" />
          </button>
        </div>
      </Route>
    </div>
  );
}

export default HabitCard;
