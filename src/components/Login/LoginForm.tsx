import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");

  const onChanegeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChanegePasswrod = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswrod(event.target.value);
  };

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      email,
      password,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_MONGO_API}/api/users/login`,
        formData
      );
      if (data.loginSuccess) {
        navigate("/", { replace: true });
        localStorage.setItem("userId", data.userId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={onChanegeEmail}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={onChanegePasswrod}
              required
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary w-full btn-sumbit">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
