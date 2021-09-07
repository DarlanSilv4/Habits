import CreateNewHabit from "../components/CreateNewHabit";
import TopNavigationBar from "../components/TopNavigationBar";
import HabitList from "../components/HabitList";
import ProfileMenu from "../components/ProfileMenu";
import { useAuth } from "../contexts/AuthContext";
import { useModals } from "../contexts/ModalsContext";
import SideNavigationBar from "../components/SideNavigationBar";

function Habits() {
  const { isNewHabitModalOpen, isProfileMenuOpen } = useModals();
  const { user } = useAuth();

  return (
    <>
      {isNewHabitModalOpen ? <CreateNewHabit /> : <></>}
      {isProfileMenuOpen ? <ProfileMenu /> : <></>}
      <SideNavigationBar />
      <TopNavigationBar user={user} />
      <main className="container">
        <HabitList />
      </main>
    </>
  );
}

export default Habits;
