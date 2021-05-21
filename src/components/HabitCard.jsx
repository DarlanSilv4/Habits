import styles from "../styles/components/HabitCard.module.css";
import IconSvg from "./IconSvg";

function HabitCard() {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{/*Icon*/}</div>
      <p>Meditation</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.checkButton}>
          <IconSvg icon="check" height="32" width="32" color="#666666" />
        </button>
        <button className={styles.cancelButton}>
          <IconSvg icon="cancel" height="32" width="32" color="#666666" />
        </button>
      </div>
    </div>
  );
}

export default HabitCard;
