import CreateNewHabit from "../components/CreateNewHabit";
import TopNavigationBar from "../components/TopNavigationBar";
import HabitList from "../components/HabitList";
import StreakMap from "../components/StreakMap";
import { useHabits } from "../contexts/HabitsContext";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { isNewHabitModalOpen } = useHabits();
  const { user } = useAuth();

  return (
    <>
      {isNewHabitModalOpen ? <CreateNewHabit /> : <></>}
      <TopNavigationBar user={user} />
      <main className="container">
        <HabitList />
        <StreakMap />
      </main>
    </>
  );
}

export default Home;
