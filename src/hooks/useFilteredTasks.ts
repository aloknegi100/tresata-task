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

  // Filter tasks by search term
  const filteredTasks = useMemo(() => {
    if (!searchTerm) return tasks;
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tasks, searchTerm]);

  // Group tasks by status
  const tasksByStatus: Record<TaskStatus, Task[]> = useMemo(() => {
    const result: Record<TaskStatus, Task[]> = {
      pending: [],
      "in-progress": [],
      completed: [],
    };
    filteredTasks.forEach((task) => {
      result[task.status].push(task);
    });
    return result;
  }, [filteredTasks]);

  return { searchTerm, setSearchTerm, open, setOpen, tasksByStatus };
};
