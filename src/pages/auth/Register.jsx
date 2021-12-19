import React, { useRef, useState } from "react";
import "./auth.css";
import axios from "axios";
import {
  Button,
  IconButton,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useHistory } from "react-router";
import toast from "react-hot-toast";
<<<<<<< HEAD:client/src/components/auth/Register.jsx

export default function Register() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.current.value) return toast.error("Username is required");
    if (!email.current.value) return toast.error("Email address is required");
    if (!password.current.value) return toast.error("Password is required");
    if (!confirmPassword.current.value)
      return toast.error("Please confirm your password");
    if (password.current.value !== confirmPassword.current.value)
      return toast.error("Passwords do not match");

    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };

    try {
      let res = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        user
      );
      if (res.data.success) toast.success(res.data.msg);
      history.push("/verify-user");
    } catch (err) {
      if (!err.response.data.success) return toast.error(err.response.data.msg);
    }
  };
=======
import { Link } from "react-router-dom";

const Register = () => {
	const firstname = useRef();
	const lastname = useRef();
	const username = useRef();
	const email = useRef();
	const password = useRef();
>>>>>>> 918f0c0896fb2bcabbbb530b97ed3f58eae743d6:src/pages/auth/Register.jsx

  return (
    <div className="register">
      <div className="holder">
        <h3>Register Here</h3>
        <form
          onSubmit={handleSubmit}
          className="register__form"
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Username"
            id="filled-start-adornment"
            sx={{ m: 1, width: "35ch" }}
            variant="filled"
            type="text"
            inputRef={username}
          />

<<<<<<< HEAD:client/src/components/auth/Register.jsx
          <TextField
            label="Email address"
            id="filled-start-adornment"
            sx={{ m: 1, width: "35ch" }}
            variant="filled"
            type="email"
            inputRef={email}
          />
=======
		try {
			let res = await axios.post(
				"https://frooto-api.herokuapp.com/api/v1/auth/register",
				user,
			);
			if (res.data.success) toast.success(res.data.msg);
			window.location.href = "/user/verify";
		} catch (err) {
			if (!err.response.data.success) return toast.error(err.response.data.msg);
		}
	};
>>>>>>> 918f0c0896fb2bcabbbb530b97ed3f58eae743d6:src/pages/auth/Register.jsx

          <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword1 ? "text" : "password"}
              inputRef={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Confirm Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword2 ? "text" : "password"}
              inputRef={confirmPassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <div className="btn">
            <Button type="submit" variant="contained" className="register__btn">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
