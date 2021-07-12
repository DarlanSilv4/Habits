import React, { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./AuthContext";

export const HabitsContext = React.createContext({});

function HabitsProvider(props) {
  const { user } = useAuth();

  const [habits, setHabits] = useState([]);
  const [concludedHabits, setConcludedHabits] = useState([]);
  const [isNewHabitModalOpen, setIsNewHabitModalOpen] = useState(false);

  const handleNewHabitModalOpen = () => {
    setIsNewHabitModalOpen(!isNewHabitModalOpen);
  };

  const updateConcludedHabitsInDatabase = async (habitList) => {
    const date = new Date();
    const today = date.getDate().toString().padStart(2, "0"); //get date in format DD
    const currentMonth = (date.getMonth() + 1).toString().padStart(2, "0"); //get month in format MM
    const currentYear = date.getFullYear();

    const dbRef = database.ref(
      `users/${user.id}/concludedHabits/${currentYear}/${currentMonth}`
    );
    await dbRef.child(today).set(habitList);
  };

  const handleCompleteHabit = (habitId) => {
    const removeHabitById = (habitId) => {
      return concludedHabits.filter((concludedHabitId) => {
        return concludedHabitId !== habitId;
      });
    };

    const isHabitConcluded = concludedHabits.includes(habitId);

    if (isHabitConcluded) {
      const updatedList = removeHabitById(habitId);
      updateConcludedHabitsInDatabase(updatedList);
      return;
    }

    const updatedList = concludedHabits.concat(habitId);
    updateConcludedHabitsInDatabase(updatedList);
  };

  useEffect(() => {
    const loadAllHabits = async () => {
      const dbRef = database.ref(`users/${user.id}/habits`);

      dbRef.on("value", (snapshot) => {
        const data = snapshot.val();
        const userHabits = data ?? {};

        const parsedHabits = Object.entries(userHabits).map(([key, value]) => {
          return {
            id: key,
            name: value.name,
            days: value.days,
            schedule: value.schedule,
          };
        });

        setHabits(parsedHabits);
      });

      return () => {
        dbRef.off("value");
      };
    };

    const loadConcludedHabits = async () => {
      const date = new Date();
      const today = date.getDate().toString().padStart(2, "0"); //get date in format DD
      const currentMonth = (date.getMonth() + 1).toString().padStart(2, "0"); //get month in format MM
      const currentYear = date.getFullYear();
      const dbRef = database.ref(
        `users/${user.id}/concludedHabits/${currentYear}/${currentMonth}/${today}`
      );

      dbRef.on("value", (snapshot) => {
        const data = snapshot.val();
        const userConcludedHabits = data ?? [];
        setConcludedHabits(userConcludedHabits);
      });

      return () => {
        dbRef.off("value");
      };
    };

    if (user) {
      loadAllHabits();
      loadConcludedHabits();
    }
  }, [user]);

  return (
    <HabitsContext.Provider
      value={{
        handleNewHabitModalOpen,
        handleCompleteHabit,
        isNewHabitModalOpen,
        concludedHabits,
        habits,
      }}
    >
      {props.children}
    </HabitsContext.Provider>
  );
}

export const useHabits = () => React.useContext(HabitsContext);

export default HabitsProvider;
