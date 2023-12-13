import "../css/login.css";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginfn = (data) => {
    console.log(data);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form className="loginform" onSubmit={handleSubmit(loginfn)}>
      <div className="form-group">
        <i className="fa-solid fa-user"></i> username<label></label>
        <input
          type="text"
          id="username"
          // maxLength="8"
          {...register("username", {
            required: {
              value: true,
              message: "username is required",
            },
            minLength: {
              value: 3,
              message: "username should atleast 3 characters",
            },
            maxLength: {
              value: 8,
              message: "username should maximum of 8 characters",
            },
          })}
        />
      </div>
      <div className="error">
        <small>{errors?.username?.message}</small>
      </div>
      <div className="form-group">
        <i className="fa-solid fa-lock"></i> password<label></label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
            minLength: {
              value: 8,
              message: "password should be minimum of 8 characters",
            },
            maxLength: {
              value: 16,
              message: "password should be maximum of 16  characters",
            },
          })}
        />
      </div>
      <div className="error">
        <small>{errors?.password?.message}</small>
      </div>
      <div className="form-group">
        {/* <button id="login-btn" onClick={() => alert("hello")}> */}
        <button id="login-btn">
          <i className="fa-solid fa-right-to-bracket"></i> login
        </button>
      </div>
    </form>
  );
}

export default Login;
