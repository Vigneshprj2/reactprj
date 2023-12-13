import "../css/signup.css";
function Signup() {
  return (
    <div className="signupform">
      <div className="form-group">
        <i className="fa-solid fa-user"></i> Email<label></label>
        <input type="text" maxLength="8" />
      </div>
      <div className="form-group">
        <i className="fa-solid fa-lock"></i> Password<label></label>
        <input type="password" />
      </div>
      <div className="form-group">
        <i className="fa-solid fa-key"></i> ResetPassword<label></label>
        <input type="password" />
      </div>
      <div className="form-group">
        <button id="signup-btn" onClick={() => alert("heyy")}>
          <i className="fa-solid fa-right-to-bracket"></i> Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
