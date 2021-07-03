import styles from "../styles/pages/Login.module.css";

import PageLoader from "../components/PageLoader";

import { auth } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect } from "react-router-dom";

export function Login() {
  const { signInWithGoogle } = useAuth();
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    <div>
      <p>Error: {error.message}</p>
    </div>;
  }
  if (loading) {
    return <PageLoader />;
  }
  if (user) {
    return <Redirect to={"/app"} />;
  }

  return (
    <div className={styles.login}>
      <header>
        <div>
          <img src="/icons/habit-logo.svg" alt="habit icon" />
          <h1>Habits</h1>
        </div>
        <p>Focus on your routine and start building habits!</p>
      </header>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <img src="/icons/google-icon.svg" alt="google icon" />
        <p>Sign in with Google</p>
      </button>
    </div>
  );
}

export default Login;
