import { useState } from "react";
import styles from "../styles/components/StreakMap.module.css";

function StreakMap() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

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

  const isToday = (day) => {
    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    return day === today && month === currentMonth && year === currentYear;
  };

  const createListDays = () => {
    const days = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstWeekday = firstDay.getDay();

    //create empty items if the first month day is not on the first week day
    for (let i = 1; i <= firstWeekday; i++) {
      days.push(
        <td className={styles.day} key={i * -1}>
          {" "}
        </td>
      );
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      isToday(day)
        ? days.push(
            <td className={`${styles.day} ${styles.today}`} key={day}>
              {day}
            </td>
          )
        : days.push(
            <td className={styles.day} key={day}>
              {day}
            </td>
          );
    }

    return days;
  };

  const sliceInWeeks = (days) => {
    const weeks = [];
    const slice = 7;

    for (let i = 0; i < days.length; i = i + slice) {
      weeks.push(days.slice(i, i + slice));
    }

    return weeks;
  };

  const createListWeek = () => {
    const days = createListDays();
    const weeks = sliceInWeeks(days);

    const listWeek = [];

    weeks.forEach((week, index) => {
      listWeek.push(
        <tr className={styles.week} key={index}>
          {week}
        </tr>
      );
    });

    return listWeek;
  };

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
            <p>0</p>
            <p>Days</p>
          </div>
        </header>

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

          <table>
            <tbody>{createListWeek()}</tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default StreakMap;
