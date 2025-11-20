import { useState } from "react";
import type { Task, TaskStatus } from "../../types/task";
import TaskSections from "../../components/ui/TaskSections/TaskSections";
import SearchBar from "../../components/ui/Searchbar/SearchBar";
import "./Home.css";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design UI",
      description: "Finish the Figma screens",
      status: "in-progress",
      date: "Oct 20, 2025",
    },
    {
      id: "2",
      title: "Setup project",
      description: "Initialize React + TS structure",
      status: "pending",
      date: "Oct 21, 2025",
    },
    {
      id: "5",
      title: "Setup project",
      description:
        "Initialize React + TS structure. Finish the Figma screensFinish the Figma screensFinish the Figma screensFinish the Figma screens",
      status: "pending",
      date: "Oct 22, 2025",
    },
    {
      id: "3",
      title: "Deploy App",
      description: "Deploy on Vercel",
      status: "completed",
      date: "Oct 23, 2025",
    },
  ]);

  const [open, setOpen] = useState<Record<TaskStatus, boolean>>({
    pending: false,
    "in-progress": false,
    completed: false,
  });

  return (
    <div className="home-container">
      <SearchBar placeholder="Search To-Do" value="" onChange={() => {}} />
      <TaskSections tasks={tasks} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
