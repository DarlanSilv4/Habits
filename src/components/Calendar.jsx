import { useEffect, useState } from "react";
import styles from "../styles/components/Calendar.module.css";

function Calendar({ year, month, habitsConcludedInThisMonth }) {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const isToday = (day) => {
      const date = new Date();
      const today = date.getDate();
      const currentMonth = date.getMonth();
      const currentYear = date.getFullYear();

      if (day === today && month === currentMonth && year === currentYear)
        return styles.today;

      return "";
    };

    const thereHabitsConcludedToday = (day) => {
      const stringDay = day.toString();

      if (habitsConcludedInThisMonth.length > 0) {
        if (habitsConcludedInThisMonth.includes(stringDay))
          return styles.completedDay;
      }
      return "";
    };

    const setupDays = () => {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const firstWeekday = firstDay.getDay();

      const updatedDays = [];

      for (let i = 1; i <= firstWeekday; i++) {
        updatedDays.push(
          <p key={i * -1} className={styles.day}>
            {" "}
          </p>
        );
      }

      for (let day = 1; day <= lastDay.getDate(); day++) {
        updatedDays.push(
          <p
            key={day}
            className={`${styles.day} ${isToday(
              day
            )} ${thereHabitsConcludedToday(day)}`}
          >
            {day}
          </p>
        );
      }

      setDays(updatedDays);
    };

    setupDays();
  }, [habitsConcludedInThisMonth, month, year]);

  return (
    <div className={styles.calendar}>
      <div className={styles.weekdays}>
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>

      <div className={styles.dayContainer}>{days}</div>
    </div>
  );
}

export default Calendar;
