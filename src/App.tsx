import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import "./index.css";
import AddTask from "./pages/AddTask/AddTask";
import EditTask from "./pages/EditTask/EditTask";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
      </Routes>
      </main>
    </div>
  );
};

export default App;
