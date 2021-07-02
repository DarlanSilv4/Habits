import styles from "../styles/components/PageLoader.module.css";

function PageLoader() {
  return (
    <div className={styles.pageLoader}>
      <img src="icons/habit-logo.svg" alt="habit logo" />
      <div className={styles.loader}></div>
    </div>
  );
}

export default PageLoader;
