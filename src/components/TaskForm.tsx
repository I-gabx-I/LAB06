// components/TaskForm.tsx
import React, { useState } from "react";
import { Task } from "../types";

type TaskFormProps = {
  addTask: (task: Task) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    addTask({ id: Date.now(), text, category });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
