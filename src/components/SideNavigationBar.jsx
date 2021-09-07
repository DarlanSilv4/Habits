import { Link } from "react-router-dom";
import { useModals } from "../contexts/ModalsContext";
import styles from "../styles/components/SideNavigationBar.module.css";

function SideNavigationBar() {
  const { isSideBarOpen, handleSideBarOpen } = useModals();

  const closeSideBarClickingOut = (event) => {
    if (event.target.id === "sideBar_overlay") {
      handleSideBarOpen();
    }
  };

  return (
    <div
      id="sideBar_overlay"
      onClick={closeSideBarClickingOut}
      className={
        isSideBarOpen ? styles.overlay : styles.sideNavigationBarHidden
      }
    >
      <div className={styles.sideNavigationBar}>
        <header>
          <button onClick={handleSideBarOpen}>
            <img src="./icons/menu_dark.svg" alt="menu icon" />
          </button>
          <Link to={"/app"} className={styles.logo}>
            <img src="./icons/habit_dark_logo.svg" alt="logo" />
            <h2>Habits</h2>
          </Link>
        </header>
        <div className={styles.line}></div>
        <section>
          <Link to={"/app"}>
            <img src="./icons/home_black.svg" alt="home" />
            <p>Home</p>
          </Link>
          <Link to={"/habits"}>
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
