import styles from "../styles/components/CreateNewHabit.module.css";

function CreateNewHabit() {
  return (
    <div className={styles.overlay}>
      <div className={styles.createNewHabit}>
        <header>
          <h2>Create New Habit</h2>
          <button>
            <img src="./icons/close.svg" alt="close" />
          </button>
        </header>

        <div className={styles.line}></div>

        <div className={styles.wrapper}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}></div>
            <button className={styles.addIcon}>
              <img src="./icons/add_icon.svg" alt="close" />
            </button>
            <p>Choose Icon</p>
          </div>

          <form>
            <label>
              <p>Name</p>
              <input placeholder="Ex: Reading to relax" />
            </label>

            <div>
              <p>Days of the week</p>
              <div className={styles.weekDayPicker}>
                <label>
                  <input type="checkbox" />
                  <p>Sun</p>
                </label>

                <label>
                  <input type="checkbox" />
                  <p>Mon</p>
                </label>

                <label>
                  <input type="checkbox" />
                  <p>Tue</p>
                </label>

                <label>
                  <input type="checkbox" />
                  <p>Wed</p>
                </label>

                <label>
                  <input type="checkbox" />
                  <p>Thu</p>
                </label>

                <label>
                  <input type="checkbox" />
                  <p>Fri</p>
                </label>

                <label>
                  <input type="checkbox" />
                  <p>Sat</p>
                </label>
              </div>
            </div>

            <div>
              <p>Schedule</p>
              <div className={styles.schedule}>
                <label>
                  <input type="radio" />
                  <p>Anytime</p>
                </label>

                <label>
                  <input type="radio" />
                  <p>Morning</p>
                </label>

                <label>
                  <input type="radio" />
                  <p>Afternoon</p>
                </label>

                <label>
                  <input type="radio" />
                  <p>Night</p>
                </label>
              </div>
            </div>

            <div className={styles.buttons}>
              <button>Cancel</button>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewHabit;
