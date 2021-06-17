import React, { useState } from "react";

export const HabitsContext = React.createContext({});

function HabitsProvider(props) {
  const [isNewHabitModalOpen, setIsNewHabitModalOpen] = useState(false);

  const handleNewHabitModalOpen = () => {
    setIsNewHabitModalOpen(!isNewHabitModalOpen);
  };

  return (
    <HabitsContext.Provider
      value={{ handleNewHabitModalOpen, isNewHabitModalOpen }}
    >
      {props.children}
    </HabitsContext.Provider>
  );
}

export const useHabits = () => React.useContext(HabitsContext);

export default HabitsProvider;
