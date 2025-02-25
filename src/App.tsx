import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  Card,
  Typography,
  Grid,
} from "@mui/material";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ text: string; category: string }[]>([]);
  const [newTask, setNewTask] = useState("Hacer mate");
  const [category, setCategory] = useState("Work");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, category }]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index: number) => {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = newText;
      setTasks(updatedTasks);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Card variant="outlined" style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Task Manager
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="New task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Select
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={addTask}>
              Add Task
            </Button>
          </Grid>
        </Grid>
        <div style={{ marginTop: "20px" }}>
          {tasks.map((task, index) => (
            <Card
              key={index}
              variant="outlined"
              style={{ margin: "10px 0", padding: "10px" }}
            >
              <Typography>
                {task.text} - {task.category}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginLeft: "10px" }}
                onClick={() => deleteTask(index)}
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                style={{ marginLeft: "10px" }}
                onClick={() => editTask(index)}
              >
                Edit
              </Button>
            </Card>
          ))}
        </div>
      </Card>
    </Container>
  );
};

export default App;
