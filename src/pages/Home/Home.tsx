import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/ui/Searchbar/SearchBar";
import Button from "../../components/ui/Button/Button";
import TaskSections from "../../components/ui/TaskSections/TaskSections";
import { useTasks } from "../../hooks/useTasks";
import { useFilteredTasks } from "../../hooks/useFilteredTasks";
import "./Home.css";

const Home = () => {
  const { tasks } = useTasks();
  const navigate = useNavigate();

  const { searchTerm, setSearchTerm, open, setOpen, tasksByStatus } =
    useFilteredTasks({ tasks });

  return (
    <div className="home-container">
      <div className="home-header">
        <SearchBar
          placeholder="Search To-Do"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => navigate("/add-task")}>+ Add Task</Button>
      </div>

      <TaskSections tasks={tasksByStatus} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
