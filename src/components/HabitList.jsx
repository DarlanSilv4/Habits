import styles from "../styles/components/HabitList.module.css";

import HabitCard from "./HabitCard.jsx";
import { useHabits } from "../contexts/HabitsContext.jsx";
import { useStreak } from "../contexts/StreakContext";
import { useModals } from "../contexts/ModalsContext";
import { Route } from "react-router-dom";

function HabitList() {
  const { handleCompleteHabit, handleDeleteHabit, concludedHabits, habits } =
    useHabits();

  const { handleNewHabitModalOpen } = useModals();

  const { handleStreak } = useStreak();

  const title = () => {
    if (window.location.pathname === "/app") return "Today";
    return "Manage Your Habits";
  };

  const filterHabitsForToday = () => {
    const today = new Date().getDay();
    const weekDays = {
      0: "sun",
      1: "mon",
      2: "tue",
      3: "wed",
      4: "thu",
      5: "fri",
      6: "sat",
    };

    const isHabitForToday = (habit) => {
      return habit.days.includes(weekDays[today]);
    };

    const todayHabits = habits.filter((habit) => isHabitForToday(habit));

    return todayHabits;
  };

  const isHabitConcluded = (habitId) => {
    return concludedHabits.includes(habitId);
  };

  const sortHabitsByDaytime = () => {
    const todayHabits = filterHabitsForToday();

    const isCurrentDaytime = (habit, daytime) => {
      if (habit.schedule === daytime) {
        return habit;
      }
    };

    const anytime = todayHabits.filter((habit) =>
      isCurrentDaytime(habit, "anytime")
    );
    const morning = todayHabits.filter((habit) =>
      isCurrentDaytime(habit, "morning")
    );
    const afternoon = todayHabits.filter((habit) =>
      isCurrentDaytime(habit, "afternoon")
    );
    const night = todayHabits.filter((habit) =>
      isCurrentDaytime(habit, "night")
    );

    return {
      anytime: anytime,
      morning: morning,
      afternoon: afternoon,
      night: night,
    };
  };

  const setupHabitCards = (habits, isFullWidth = false) => {
    const cardList = [];

    habits.map((habit, index) =>
      cardList.push(
        <HabitCard
          key={index}
          name={habit.name}
          isConcluded={isHabitConcluded(habit.id)}
          isFullWidth={isFullWidth}
          handleCompleteHabit={() => handleCompleteHabit(habit.id)}
          handleDeleteHabit={() => handleDeleteHabit(habit.id)}
          handleStreak={handleStreak}
        />
      )
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

  const showAllHabits = () => {
    const allHabits = [];
    const habitsCards = setupHabitCards(habits, true);

    allHabits.push(
      <div className={styles.dayTimeWrapper}>
        <h3 className={styles.dayTime}>All Habits</h3>
        <div className={styles.line} />
        <div className={styles.habits}>{habitsCards}</div>
      </div>
    );

    return allHabits;
  };

  return (
    <div className={styles.habitList}>
      <header>
        <h2 className={styles.title}>{title()}</h2>
        <button
          className={styles.newHabitButton}
          onClick={() => handleNewHabitModalOpen()}
        >
          <img src="./icons/add.svg" alt="add icon" />
          <p>New Habit</p>
        </button>
      </header>
      <Route path="/app">
        <div className={styles.habits}>{setupHabitsInDivisors()}</div>
      </Route>
      <Route path="/habits">
        <div className={styles.habits}>{showAllHabits()}</div>
      </Route>
    </div>
  );
}

export default HabitList;
