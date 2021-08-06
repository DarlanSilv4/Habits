import React, { useState } from "react";

export const ModalsContext = React.createContext({});

function ModalsProvider(props) {
  const [isNewHabitModalOpen, setIsNewHabitModalOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleNewHabitModalOpen = () => {
    setIsNewHabitModalOpen(!isNewHabitModalOpen);
  };

  const handleProfileMenuOpen = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <ModalsContext.Provider
      value={{
        isNewHabitModalOpen,
        isProfileMenuOpen,
        handleNewHabitModalOpen,
        handleProfileMenuOpen,
      }}
    >
      {props.children}
    </ModalsContext.Provider>
  );
}

export const useModals = () => React.useContext(ModalsContext);

export default ModalsProvider;
