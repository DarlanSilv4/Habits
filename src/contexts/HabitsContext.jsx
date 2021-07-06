import React, { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./AuthContext";

export const HabitsContext = React.createContext({});

function HabitsProvider(props) {
  const { user } = useAuth();

  const [habits, setHabits] = useState([]);
  const [isNewHabitModalOpen, setIsNewHabitModalOpen] = useState(false);

  const handleNewHabitModalOpen = () => {
    setIsNewHabitModalOpen(!isNewHabitModalOpen);
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

    if (user) {
      loadAllHabits();
    }
  }, [user]);

  return (
    <HabitsContext.Provider
      value={{ handleNewHabitModalOpen, isNewHabitModalOpen, habits }}
    >
      {props.children}
    </HabitsContext.Provider>
  );
}

export const useHabits = () => React.useContext(HabitsContext);

export default HabitsProvider;
