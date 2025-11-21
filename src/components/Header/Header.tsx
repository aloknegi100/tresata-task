import { ArrowLeft } from "lucide-react";
import { Heading } from "../Typography";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isBackPage =
    pathname === "/add-task" || pathname.startsWith("/edit-task");

  const getHeaderTitle = () => {
    if (pathname === "/add-task") return "Add Task";
    if (pathname.startsWith("/edit-task")) return "Edit Task";
    return "TO DO APP";
  };

  return (
    <div className="header-container">
      {isBackPage && (
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
      )}

      <Heading color="white">{getHeaderTitle()}</Heading>
    </div>
  );
};

export default Header;
