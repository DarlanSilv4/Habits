import styles from "../styles/components/TopNavigationBar.module.css";

function TopNavigationBar() {
  return (
    <div className={styles.topNavigationBar}>
      <div className={styles.wrapper}>
        <a href="/" title="menu" className={styles.topbarButton}>
          <img src="./icons/menu.svg" alt="menu" />
        </a>

        <a href="/" title="Homepage" className={styles.logo}>
          <img src="./icons/habit-logo.svg" alt="menu" />
          <h2>Habits</h2>
        </a>
      </div>

      <div className={styles.searchWrapper}>
        <img
          src="./icons/search.svg"
          alt="search"
          className={styles.searchIcon}
        />
        <input placeholder="Search" />
      </div>

      <div className={styles.wrapper}>
        <a href="/" title="settings" className={styles.topbarButton}>
          <img src="./icons/settings.svg" alt="settings" />
        </a>
        <img
          className={styles.profilePicture}
          alt="profile"
          src="https://pbs.twimg.com/media/ED-OVtiXYAA2kdF.jpg"
        />
      </div>
    </div>
  );
}

export default TopNavigationBar;
