// components/TaskItem.tsx
import React, { useState } from "react";
import { Task } from "../types";

type TaskItemProps = {
  task: Task;
  deleteTask: (id: number) => void;
  updateTask: (task: Task) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  deleteTask,
  updateTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    updateTask({ ...task, text: newText });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span>{task.text}</span>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      {isEditing ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </li>
  );
};

export default TaskItem;
