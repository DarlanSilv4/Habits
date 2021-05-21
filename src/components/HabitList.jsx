import HabitCard from "./HabitCard.jsx";

import styles from "../styles/components/HabitList.module.css";

function HabitList() {
  return (
    <div className={styles.habitList}>
      <header>
        <h2 className={styles.title}>Habits</h2>
        <button className={styles.newHabitButton}>
          <img src="./icons/add.svg" alt="add icon" />
          <p>New Habit</p>
        </button>
      </header>

      <div className={styles.dayTimeWrapper}>
        <h3 className={styles.dayTime}>Morning</h3>
        <div className={styles.line} />
        <div className={styles.habits}>
          <HabitCard />
        </div>
      </div>
    </div>
  );
}

export default HabitList;
