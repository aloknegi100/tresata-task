import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import type { TaskStatus } from "../../types/task";
import Button from "../../components/ui/Button/Button";
import "./AddTask.css";
import { Heading, Text } from "../../components/Typography";

const AddTask = () => {
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("pending");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return alert("Title and Description required");
    addTask({ title, description, status, date });
  };

  return (
    <div className="add-task-container">
      <Heading>Add Task</Heading>
      <form onSubmit={handleSubmit} className="add-task-form">
        <label>
          <Text>Title</Text>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />
        </label>
        <label>
          <Text>Description</Text>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
          />
        </label>
        <label>
          <Text>Status</Text>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <label>
          <Text>Date</Text>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <Button type="submit">Add Task</Button>
      </form>
    </div>
  );
};

export default AddTask;
