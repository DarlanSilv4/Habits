import styles from "../styles/pages/Login.module.css";

function Login() {
  return (
    <div className={styles.login}>
      <header>
        <div>
          <img src="/icons/habit-logo.svg" alt="habit icon" />
          <h1>Habits</h1>
        </div>
        <p>Focus on your routine and start building habits!</p>
      </header>
      <button>
        <img src="/icons/google-icon.svg" alt="google icon" />
        <p>Login with Google</p>
      </button>
    </div>
  );
}

export default Login;
