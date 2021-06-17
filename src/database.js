const habits = JSON.parse(localStorage.getItem("@habitLit")) || [];

const addHabits = (newHabit) => {
  habits.push(newHabit);
  localStorage.setItem("@habitLit", JSON.stringify(habits));
}

const getHabits = () => {
  return habits;
}

export { getHabits, addHabits };