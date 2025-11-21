import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/ui/Searchbar/SearchBar";
import TaskSections from "../../components/ui/TaskSections/TaskSections";
import { useTasks } from "../../hooks/useTasks";
import { useFilteredTasks } from "../../hooks/useFilteredTasks";
import "./Home.css";

const Home = () => {
  const { tasks, groupedTasks, deleteTask } = useTasks();
  const navigate = useNavigate();

  const { searchTerm, setSearchTerm, open, setOpen, tasksByStatus } =
    useFilteredTasks({ tasks });

  const displayTasks = searchTerm ? tasksByStatus : groupedTasks;

  const handleDeleteTask = (taskId: string) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(taskId);
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <SearchBar
          placeholder="Search To-Do"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <TaskSections
        tasks={displayTasks}
        open={open}
        setOpen={setOpen}
        onDelete={handleDeleteTask}
        searchTerm={searchTerm}
      />

      <button
        className="floating-add-btn"
        onClick={() => navigate("/add-task")}
        aria-label="Add new task"
      >
        +
      </button>
    </div>
  );
};

export default Home;
