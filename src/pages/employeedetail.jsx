// import "..css/employeedetail.css";
import React from "react";
import Card from "../components/card";
import "../css/employeedetails.css";
import { useNavigate } from "react-router-dom";
function EmployeeDetail() {
  const navigate = useNavigate();
  let emp = {
    Name: "Aurora",
    Age: 53,
    Email: "ante.blandit@disparturient.ca",
    "Date of joining": "10/06/2019",
    "Phone number": "1628101902299",
    Street: "493 Iaculis Rd.",
    City: "Lewiston",
    Zip: "42591-180",
    Region: "Maine",
    Country: "Sudan",
    Info: "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
    EmployeeID: 101,
  };
  React.useEffect(()=> {
    if (sessionStorage.getItem("emp")) {
      emp = JSON.parse(sessionStorage.getItem("emp"));
    } else {
      navigate("/employeelist");
    }
  }, [])
  const Back = (emp) => {
    console.log(emp);
    navigate("/employeelist");
  };
  return (
    <div id="content">
      {/* <div className="Profile_photo">
        <img src="idcard-removebg-preview (1).png" alt="Profile" />
        <p>Name:</p>
        <p>Emp ID:</p>
        <button onClick="back()">Back</button>
      </div> */}
      <Card btnText="back" emp={emp} btnfn={Back} />
      <table id="Employee" className="empdet">
        <tr>
          <th>Name</th>
          <td>{emp.Name}</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>{emp.Age}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{emp.Email}</td>
        </tr>
        <tr>
          <th>Date of joining</th>
          <td>{emp["Date of joining"]}</td>
        </tr>
        <tr>
          <th>Phone number</th>
          <td>{emp["Phone number"]}</td>
        </tr>
        <tr>
          <th>Street</th>
          <td>{emp.Street}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{emp.City}</td>
        </tr>
        <tr>
          <th>Zip</th>
          <td>{emp.Zip}</td>
        </tr>
        <tr>
          <th>Region</th>
          <td>{emp.Region}</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>{emp.Country}</td>
        </tr>
        <tr>
          <th>Info</th>
          <td>{emp.Info}</td>
        </tr>
        <tr>
          <th>EmployeeID</th>
          <td>{emp.EmployeeID}</td>
        </tr>
      </table>
    </div>
  );
}
export default EmployeeDetail;
