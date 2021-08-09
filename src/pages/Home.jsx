import CreateNewHabit from "../components/CreateNewHabit";
import TopNavigationBar from "../components/TopNavigationBar";
import HabitList from "../components/HabitList";
import StreakMap from "../components/StreakMap";
import ProfileMenu from "../components/ProfileMenu";
import { useAuth } from "../contexts/AuthContext";
import { useModals } from "../contexts/ModalsContext";

function Home() {
  const { isNewHabitModalOpen, isProfileMenuOpen } = useModals();
  const { user } = useAuth();

  return (
    <>
      {isNewHabitModalOpen ? <CreateNewHabit /> : <></>}
      {isProfileMenuOpen ? <ProfileMenu /> : <></>}
      <TopNavigationBar user={user} />
      <main className="container">
        <HabitList />
        <StreakMap />
      </main>
    </>
  );
}

export default Home;
