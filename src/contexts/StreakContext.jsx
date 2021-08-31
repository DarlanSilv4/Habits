import React from "react";
import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./AuthContext";
import { useHabits } from "./HabitsContext";

export const StreakContext = React.createContext({});

function StreakProvider(props) {
  const { user } = useAuth();
  const { concludedHabits } = useHabits();

  const [streakLastDay, setStreakLastDay] = useState(null);
  const [streakLastDayBackup, setStreakLastDayBackup] = useState(null);
  const [streakCount, setStreakCount] = useState(0);

  const updateStreakInDatabase = async (newCount, newLastDay) => {
    const dbRef = database.ref(`users/${user.id}/streak`);

    if (newLastDay) {
      await dbRef.child("lastDayBackup").set(streakLastDay);
      await dbRef.child("lastDay").set(newLastDay);
    } else {
      await dbRef.child("lastDay").set(streakLastDayBackup);
    }

    await dbRef.child("count").set(newCount);
  };

  const updateStreak = async () => {
    if (user) {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); //return MM
      const day = String(date.getDate()).padStart(2, "0"); //return DD

      const dateFormatted = `${year}-${month}-${day}`;

      if (dateFormatted === streakLastDay) return;

      setStreakLastDayBackup(streakLastDay);
      setStreakLastDay(dateFormatted);

      const countUpdated = streakCount + 1;
      setStreakCount(countUpdated);

      updateStreakInDatabase(countUpdated, dateFormatted);
    }
  };

  const undoUpdateStreak = async () => {
    if (user) {
      if (concludedHabits.length > 1) return;

      setStreakLastDay(streakLastDayBackup);

      const countUpdated = streakCount - 1;
      setStreakCount(countUpdated);
      updateStreakInDatabase(countUpdated);
    }
  };

  useEffect(() => {
    const getFormattedDate = (date = new Date()) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); //return MM
      const day = String(date.getDate()).padStart(2, "0"); //return DD

      return `${year}-${month}-${day}`;
    };

    if (streakLastDay) {
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const day = new Date().getDate();

      const isNotStreakLastDayYesterday = () => {
        const yesterday = new Date(`${year},${month + 1},${day - 1}`);
        const yesterdayFormatted = getFormattedDate(yesterday); //YYYY-MM-DD;
        return streakLastDay !== yesterdayFormatted;
      };

      const isNotStreakLastDayToday = () => {
        const todayFormatted = getFormattedDate(); //YYYY-MM-DD;
        return streakLastDay !== todayFormatted;
      };

      const resetStreakCount = async () => {
        const dbRef = database.ref(`users/${user.id}/streak`);
        await dbRef.child("count").set(0);

        setStreakCount(0);
      };

      if (isNotStreakLastDayToday() && isNotStreakLastDayYesterday()) {
        resetStreakCount();
      }
    }
  }, [streakLastDay, user]);

  useEffect(() => {
    const loadingStreakDataFromDatabase = async () => {
      const dbRef = database.ref(`users/${user.id}/streak`);
      dbRef.once("value", (snapshot) => {
        const data = snapshot.val();
        const streak = data ?? null;
        if (streak) {
          streak.lastDay
            ? setStreakLastDay(streak.lastDay)
            : setStreakLastDay(null);

          streak.lastDayBackup
            ? setStreakLastDayBackup(streak.lastDayBackup)
            : setStreakLastDayBackup(null);

          streak.count ? setStreakCount(streak.count) : setStreakCount(0);
        }
      });

      return () => {
        dbRef.off("value");
      };
    };

    if (user) {
      loadingStreakDataFromDatabase();
    }
  }, [user]);

  const handleStreak = {
    updateStreak: updateStreak,
    undoUpdateStreak: undoUpdateStreak,
  };

  return (
    <StreakContext.Provider value={{ streakCount, handleStreak }}>
      {props.children}
    </StreakContext.Provider>
  );
}

export const useStreak = () => React.useContext(StreakContext);

export default StreakProvider;
