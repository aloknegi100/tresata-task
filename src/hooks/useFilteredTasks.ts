import { useMemo, useState } from "react";
import type { Task, TaskStatus } from "../types/task";

interface UseFilteredTasksProps {
  tasks: Task[];
  defaultOpen?: Record<TaskStatus, boolean>;
}

export const useFilteredTasks = ({ tasks, defaultOpen }: UseFilteredTasksProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState<Record<TaskStatus, boolean>>(
    defaultOpen || {
      pending: true,
      "in-progress": true,
      completed: true,
    }
  );

  const filteredTasks = useMemo(() => {
    if (!searchTerm.trim()) return tasks;
    
    const term = searchTerm.toLowerCase().trim();
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(term) ||
        task.description.toLowerCase().includes(term)
    );
  }, [tasks, searchTerm]);

  const tasksByStatus: Record<TaskStatus, Task[]> = useMemo(() => {
    const result: Record<TaskStatus, Task[]> = {
      pending: [],
      "in-progress": [],
      completed: [],
    };
    
    filteredTasks.forEach((task) => {
      if (result[task.status]) {
        result[task.status].push(task);
      }
    });
    
    return result;
  }, [filteredTasks]);

  return { 
    searchTerm, 
    setSearchTerm, 
    open, 
    setOpen, 
    tasksByStatus 
  };
};