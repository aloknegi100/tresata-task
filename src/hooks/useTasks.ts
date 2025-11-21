import { useState, useEffect, useRef } from "react";
import type { Task, TaskStatus } from "../types/task";
import { v4 as uuidv4 } from "uuid";

const TASKS_STORAGE_KEY = "task_manager_tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!hasLoaded.current) {
      const stored = localStorage.getItem(TASKS_STORAGE_KEY);
      if (stored) {
        try {
          const parsedTasks = JSON.parse(stored);
          setTasks(Array.isArray(parsedTasks) ? parsedTasks : []);
        } catch (error) {
          console.error("Error loading tasks:", error);
          setTasks([]);
        }
      }
      hasLoaded.current = true;
    } else {
      localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks]);

  const groupedTasks = tasks.reduce((acc, task) => {
    if (acc[task.status]) {
      acc[task.status].push(task);
    }
    return acc;
  }, {
    "pending": [],
    "in-progress": [],
    "completed": []
  } as Record<TaskStatus, Task[]>);

  const addTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      ...task,
      id: uuidv4(),
      date: new Date().toISOString()
    };
    setTasks((prev) => [...prev, newTask]);
    return newTask;
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTask = (id: string, updatedTask: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedTask } : t))
    );
  };

  return { 
    tasks, 
    groupedTasks,
    addTask, 
    deleteTask, 
    updateTask 
  };
};