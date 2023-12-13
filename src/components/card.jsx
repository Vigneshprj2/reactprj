import profiles from "../assets/images/emp1-removebg-preview.png";

function Card(props) {
  return (
    <>
      <div className="Profile_photo">
        <img src={profiles} alt="Profile" />
        <p>Name:{props.emp.Name}</p>
        <p>empID:{props.emp.EmployeeID}</p>
        <button onClick={()=>props.btnfn(props.emp)}>{props.btnText}</button>
      </div>
    </>
  );
}

export default Card;
