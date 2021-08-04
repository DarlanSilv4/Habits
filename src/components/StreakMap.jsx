import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { database } from "../services/firebase";

import styles from "../styles/components/StreakMap.module.css";

import Calendar from "../components/Calendar";
import { useStreak } from "../contexts/StreakContext";

function StreakMap() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const [habitsConcludedInThisMonth, setHabitsConcludedInThisMonth] = useState(
    []
  );

  const { user } = useAuth();
  const { streakCount } = useStreak();

  useEffect(() => {
    const loadHabitsConcludedInThisMonth = async () => {
      const yearString = year.toString();
      const monthString = (month + 1).toString().padStart(2, "0"); //convert month in format MM

      const dbRef = database.ref(
        `users/${user.id}/concludedHabits/${yearString}/${monthString}/`
      );

      dbRef.on("value", (snapshot) => {
        const data = snapshot.val();
        const userConcludedHabits = data ?? [];
        setHabitsConcludedInThisMonth(Object.keys(userConcludedHabits));
      });

      return () => {
        dbRef.off("value");
      };
    };

    if (user) {
      loadHabitsConcludedInThisMonth();
    }
  }, [user, year, month]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePreviousMonth = () => {
    const previousDate = new Date(year, month - 1);
    setMonth(previousDate.getMonth());
    setYear(previousDate.getFullYear());
  };

  const handleNextMonth = () => {
    const nextDate = new Date(year, month + 1);
    setMonth(nextDate.getMonth());
    setYear(nextDate.getFullYear());
  };

  return (
    <div className={styles.streakMap}>
      <h2>Streak Map</h2>
      <section className={styles.streakWrapper}>
        <header>
          <div className={styles.controlWrapper}>
            <button onClick={() => handlePreviousMonth()}>
              <img src="./icons/arrow_left.svg" alt="back" />
            </button>
            <div className={styles.monthWrapper}>
              <p>{year}</p>
              <p>{months[month]}</p>
            </div>
            <button onClick={() => handleNextMonth()}>
              <img src="./icons/arrow_right.svg" alt="next" />
            </button>
          </div>

          <div className={styles.daysWrapper}>
            <p>{streakCount}</p>
            <p>Days</p>
          </div>
        </header>

        <Calendar
          year={year}
          month={month}
          habitsConcludedInThisMonth={habitsConcludedInThisMonth}
        />
      </section>
    </div>
  );
}

export default StreakMap;
