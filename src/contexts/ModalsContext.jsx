import React, { useState } from "react";

export const ModalsContext = React.createContext({});

function ModalsProvider(props) {
  const [isNewHabitModalOpen, setIsNewHabitModalOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleNewHabitModalOpen = () => {
    setIsNewHabitModalOpen(!isNewHabitModalOpen);
  };

  const handleProfileMenuOpen = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <ModalsContext.Provider
      value={{
        isNewHabitModalOpen,
        isProfileMenuOpen,
        isSideBarOpen,
        handleNewHabitModalOpen,
        handleProfileMenuOpen,
        handleSideBarOpen,
      }}
    >
      {props.children}
    </ModalsContext.Provider>
  );
}

export const useModals = () => React.useContext(ModalsContext);

export default ModalsProvider;
