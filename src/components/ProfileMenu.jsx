import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/components/ProfileMenu.module.css";

function ProfileMenu() {
  const { user, signOut } = useAuth();

  return (
    <div className={styles.profileMenuWrapper}>
      <img src={user.avatar} alt="profile" className={styles.picture} />
      <p>{user.name}</p>
      <div className={styles.line}></div>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default ProfileMenu;
