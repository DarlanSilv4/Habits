import HabitCard from "./HabitCard.jsx";

import styles from "../styles/components/HabitList.module.css";
import { useHabits } from "../contexts/HabitsContext.jsx";
import { getHabits } from "../database.js";

function HabitList() {
  const { handleNewHabitModalOpen } = useHabits();
  const habits = getHabits();

  const sortHabitsByDaytime = () => {
    const isCurrentDaytime = (habit, daytime) => {
      if (habit.schedule === daytime) {
        return habit;
      }
    };

    const anytime = habits.filter((habit) =>
      isCurrentDaytime(habit, "anytime")
    );
    const morning = habits.filter((habit) =>
      isCurrentDaytime(habit, "morning")
    );
    const afternoon = habits.filter((habit) =>
      isCurrentDaytime(habit, "afternoon")
    );
    const night = habits.filter((habit) => isCurrentDaytime(habit, "night"));

    return {
      anytime: anytime,
      morning: morning,
      afternoon: afternoon,
      night: night,
    };
  };

  const setupHabitCards = (habits) => {
    const cardList = [];

    habits.map((habit, index) =>
      cardList.push(<HabitCard key={index} name={habit.name} />)
    );

    return cardList;
  };

  const setupHabitsInDivisors = () => {
    const habitsSorted = sortHabitsByDaytime();
    const habitsByTime = Object.entries(habitsSorted); // return array with key name and value
    const habitsInDivisors = [];

    const capitalize = (s) => {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    };

    habitsByTime.forEach((time) => {
      if (time[1].length > 0) {
        const habitsCards = setupHabitCards(time[1]);
        habitsInDivisors.push(
          <div className={styles.dayTimeWrapper} key={time[0]}>
            <h3 className={styles.dayTime}>{capitalize(time[0])}</h3>
            <div className={styles.line} />
            <div className={styles.habits}>{habitsCards}</div>
          </div>
        );
      }
    });

    return habitsInDivisors;
  };

  return (
    <div className={styles.habitList}>
      <header>
        <h2 className={styles.title}>Habits</h2>
        <button
          className={styles.newHabitButton}
          onClick={() => handleNewHabitModalOpen()}
        >
          <img src="./icons/add.svg" alt="add icon" />
          <p>New Habit</p>
        </button>
      </header>
      <div className={styles.habits}>{setupHabitsInDivisors()}</div>
    </div>
  );
}

export default HabitList;
