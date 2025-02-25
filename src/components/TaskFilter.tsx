// components/TaskFilter.tsx
import React from "react";

type TaskFilterProps = {
  setFilter: (filter: string) => void;
};

const TaskFilter: React.FC<TaskFilterProps> = ({ setFilter }) => {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="General">General</option>
      <option value="Work">Work</option>
      <option value="Personal">Personal</option>
    </select>
  );
};

export default TaskFilter;
