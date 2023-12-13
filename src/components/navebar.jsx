import "../css/navebar.css";
import {Link,NavLink} from "react-router-dom";

function Navebar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <i className="fa-solid fa-house"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup">
            <i className="fa-solid fa-door-open"></i> Signup
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator">
            <i className="fa-solid fa-calculator"></i> Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter">
            <i className="fa-solid fa-plus-minus"></i> Counter
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/employeedetails">
          <i className="fa-solid fa-user-tie"></i> EmployeeDetails
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/employeelist">
            <i className="fa-solid fa-people-group"></i> Employeelist
          </NavLink>
        </li>
        <li>
          <NavLink to="/pagination">
            <i className="fa-solid fa-house"></i> Pagination
          </NavLink>
        </li>
        <li>
          <NavLink to="/dummy">
            <i className="fa-solid fa-house"></i> Dummy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navebar;
