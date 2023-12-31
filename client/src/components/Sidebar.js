import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCity,
  faHome,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <nav
      id="sidebar"
      className="nav d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <div className="sidebarHeader">
        <img src="logo.png" width={"200px"} alt="Mackenzie Properties Logo" />
      </div>

      {/* Main Sidebar List */}
      <ul className="list-unstyled">
        <li className="sidebar-item sidebar-active">
          <FontAwesomeIcon icon={faHome} className="sidebar-icon me-2" />
          <a href="#forsale"> For Sale</a>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="sidebar-icon me-2"
          />
          <a href="#torent"> To Rent</a>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faShop} className="sidebar-icon me-2" />
          <a href="#commercial"> Commercial</a>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faCity} className="sidebar-icon me-2" />
          <a href="#developments"> Developments</a>
        </li>
      </ul>

      {/* Sidebar Footer */}
      <div className="mt-auto">
        <ul className="list-unstyled">
          <li>
            <a href="#about" className="text-decoration-none text-black">About</a>
          </li>
          <li>
            <a href="#contact" className="text-decoration-none text-black">Contact Us</a>
          </li>
          <li>
            <a href="#privacy" className="text-decoration-none text-black">Privacy Policy</a>
          </li>
        </ul>
        <div className="sidebar-footer">
          <p className="text-center text-muted mb-6">
            &copy; 2021 Mackenzie Properties
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
