import { useState } from "react";
import styles from "../styles/components/CreateNewHabit.module.css";
import { database } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useModals } from "../contexts/ModalsContext";

function CreateNewHabit() {
  const [name, setName] = useState("");
  const [daysOfTheWeek, setDaysOfTheWeek] = useState([]);
  const [schedule, setSchedule] = useState(null);

  const [invalidMessage, setInvalidMessage] = useState(null);

  const { user } = useAuth();
  const { handleNewHabitModalOpen } = useModals();

  const handleCheckbox = (value) => {
    const daysChecked = [].concat(daysOfTheWeek);
    const dayID = daysChecked.findIndex((day) => day === value);

    //Check day
    if (dayID === -1) {
      daysChecked.push(value);
      setDaysOfTheWeek(daysChecked);
      return;
    }

    //Uncheck day
    daysChecked.splice(dayID, 1);
    setDaysOfTheWeek(daysChecked);
  };

  const isDayChecked = (value) => {
    return daysOfTheWeek.includes(value);
  };

  const isFormValid = ({ name, days, schedule }) => {
    if (name.length === 0) {
      setInvalidMessage("Name is required");
      return false;
    }
    if (days.length === 0) {
      setInvalidMessage("Days is required");
      return false;
    }
    if (schedule === null) {
      setInvalidMessage("Schedule is required");
      return false;
    }
    return true;
  };

  const createNewHabit = async () => {
    const newHabit = {
      name: name,
      days: daysOfTheWeek,
      schedule: schedule,
    };

    if (isFormValid(newHabit)) {
      await database.ref(`users/${user.id}/habits`).push(newHabit);
      handleNewHabitModalOpen(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.createNewHabit}>
        <header>
          <h2>Create New Habit</h2>
          <button onClick={() => handleNewHabitModalOpen()}>
            <img src="./icons/close.svg" alt="close" />
          </button>
        </header>

        <div className={styles.line}></div>

        {invalidMessage !== null ? (
          <p className={styles.invalid}>{invalidMessage}</p>
        ) : null}

        <div className={styles.wrapper}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}></div>
            <button className={styles.addIcon}>
              <img src="./icons/add_icon.svg" alt="close" />
            </button>
            <p>Choose Icon</p>
          </div>

          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              <p>Name</p>
              <input
                placeholder="Ex: Reading to relax"
                onChange={(event) => setName(event.target.value)}
              />
            </label>

            <div>
              <p>Days of the week</p>
              <div
                className={styles.weekDayPicker}
                onChange={() => setInvalidMessage(null)}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={isDayChecked("sun")}
                    onChange={() => {
                      handleCheckbox("sun");
                    }}
                  />
                  <p>Sun</p>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={isDayChecked("mon")}
                    onChange={() => {
                      handleCheckbox("mon");
                    }}
                  />
                  <p>Mon</p>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={isDayChecked("tue")}
                    onChange={() => {
                      handleCheckbox("tue");
                    }}
                  />
                  <p>Tue</p>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={isDayChecked("wed")}
                    onChange={() => {
                      handleCheckbox("wed");
                    }}
                  />
                  <p>Wed</p>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={isDayChecked("thu")}
                    onChange={() => {
                      handleCheckbox("thu");
                    }}
                  />
                  <p>Thu</p>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={isDayChecked("fri")}
                    onChange={() => {
                      handleCheckbox("fri");
                    }}
                  />
                  <p>Fri</p>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={isDayChecked("sat")}
                    onChange={() => {
                      handleCheckbox("sat");
                    }}
                  />
                  <p>Sat</p>
                </label>
              </div>
            </div>

            <div>
              <p>Schedule</p>
              <div
                className={styles.schedule}
                onChange={() => setInvalidMessage(null)}
              >
                <label>
                  <input
                    checked={schedule === "anytime"}
                    name="anytime"
                    onChange={(e) => setSchedule(e.target.name)}
                    type="radio"
                  />
                  <p>Anytime</p>
                </label>

                <label>
                  <input
                    checked={schedule === "morning"}
                    name="morning"
                    onChange={(e) => setSchedule(e.target.name)}
                    type="radio"
                  />
                  <p>Morning</p>
                </label>

                <label>
                  <input
                    checked={schedule === "afternoon"}
                    name="afternoon"
                    onChange={(e) => setSchedule(e.target.name)}
                    type="radio"
                  />
                  <p>Afternoon</p>
                </label>

                <label>
                  <input
                    checked={schedule === "night"}
                    name="night"
                    onChange={(e) => setSchedule(e.target.name)}
                    type="radio"
                  />
                  <p>Night</p>
                </label>
              </div>
            </div>

            <div className={styles.buttons}>
              <button type="button" onClick={() => handleNewHabitModalOpen()}>
                Cancel
              </button>
              <button type="button" onClick={() => createNewHabit()}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewHabit;
