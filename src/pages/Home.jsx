import CreateNewHabit from "../components/CreateNewHabit";
import TopNavigationBar from "../components/TopNavigationBar";
import HabitList from "../components/HabitList";
import StreakMap from "../components/StreakMap";
import { useHabits } from "../contexts/HabitsContext";

function Home() {
  const { isNewHabitModalOpen } = useHabits();

  return (
    <>
      {isNewHabitModalOpen ? <CreateNewHabit /> : <></>}
      <TopNavigationBar />
      <main className="container">
        <HabitList />
        <StreakMap />
      </main>
    </>
  );
}

export default Home;
