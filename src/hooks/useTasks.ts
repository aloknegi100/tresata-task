import { useState, useEffect } from "react";
import type { Task } from "../types/task";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const TASKS_STORAGE_KEY = "task_manager_tasks";

export const useTasks = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>([]);

  console.log(tasks);
  

  useEffect(() => {
    const stored = localStorage.getItem(TASKS_STORAGE_KEY);
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Omit<Task, "id">) => {
    const newTask: Task = { ...task, id: uuidv4() };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedTask } : t))
    );
  };

  return { tasks, addTask, deleteTask, updateTask, setTasks };
};
