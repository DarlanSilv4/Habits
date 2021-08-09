import { useAuth } from "../contexts/AuthContext";
import { useModals } from "../contexts/ModalsContext";
import styles from "../styles/components/ProfileMenu.module.css";

function ProfileMenu() {
  const { user, signOut } = useAuth();

  const { handleProfileMenuOpen } = useModals();

  const closeMenuClickingOut = (event) => {
    if (event.target.id === "overlay") {
      handleProfileMenuOpen();
    }
  };

  return (
    <div
      id="overlay"
      className={styles.overlay}
      onClick={(event) => closeMenuClickingOut(event)}
    >
      <div className={styles.profileMenuWrapper}>
        <img src={user.avatar} alt="profile" className={styles.picture} />
        <p>{user.name}</p>
        <div className={styles.line}></div>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
}

export default ProfileMenu;
