import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="header_menu">
        <li className="menu_item">
          <span className="header-brand">
            <i className="fa-solid fa-code"></i>
          </span>
        </li>
        <li className="menu_item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="menu_item">
          <Link to={"/AboutMe"}>About me</Link>
        </li>
        <li className="menu_item">
          <Link to={"/Experience"}>Experience</Link>
        </li>
        <li className="menu_item">
          <Link to={"/Skills"}>Skills</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
