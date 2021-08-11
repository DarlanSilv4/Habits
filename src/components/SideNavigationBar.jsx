import { Link } from "react-router-dom";
import styles from "../styles/components/SideNavigationBar.module.css";

function SideNavigationBar() {
  return (
    <div className={styles.overlay}>
      <div className={styles.sideNavigationBar}>
        <header>
          <button>
            <img src="./icons/menu_dark.svg" alt="menu icon" />
          </button>
          <Link to={"/"} className={styles.logo}>
            <img src="./icons/habit_dark_logo.svg" alt="logo" />
            <h2>Habits</h2>
          </Link>
        </header>
        <div className={styles.line}></div>
        <section>
          <Link to={"/"}>
            <img src="./icons/home_black.svg" alt="home" />
            <p>Home</p>
          </Link>
          <Link to={"/"}>
            <img src="./icons/list_black.svg" alt="habit list" />
            <p>All Habits</p>
          </Link>
          <Link to={"/"}>
            <img src="./icons/emoji_events_black.svg" alt="habit ranking" />
            <p>Habits Ranking</p>
          </Link>
        </section>
        <footer>
          <p>
            Made with ❤️ by{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/DarlanSilv4"
            >
              Darlan Silva
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default SideNavigationBar;
