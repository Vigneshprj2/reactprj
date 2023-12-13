import Login from "./pages/login";
import Signup from "./pages/signup";
import Calculator from "./pages/calculator";
import { Routes, Route } from "react-router-dom";
import Navebar from "./components/navebar";
import Counter from "./pages/counter";
import EmployeeDetails from "./pages/employeedetail";
import Employeelist from "./pages/employeelist";
import Dummy from "./pages/dummy";
import Pagination from "./pages/pagination";
import Home from "./pages/home";
function App() {
  return (
    <div>
      {<Navebar></Navebar>}
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="calculator" element={<Calculator></Calculator>}></Route>
        <Route path="counter" element={<Counter></Counter>}></Route>
        <Route
          path="employeedetails"
          element={<EmployeeDetails></EmployeeDetails>}
        ></Route>
        <Route
          path="employeelist"
          element={<Employeelist></Employeelist>}
        ></Route>
        <Route path="dummy" element={<Dummy></Dummy>}></Route>
        <Route path="pagination" element={<Pagination></Pagination>}></Route>
      </Routes>
    </div>
  );
}

export default App;
