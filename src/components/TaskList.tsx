// components/TaskList.tsx
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

type TaskListProps = {
  tasks: Task[];
  deleteTask: (id: number) => void;
  updateTask: (task: Task) => void;
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  deleteTask,
  updateTask,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
