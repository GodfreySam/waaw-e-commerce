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
import toast from "react-hot-toast";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    showPassword1: false,
    showPassword2: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword1 = () => {
    setValues({
      ...values,
      showPassword1: !values.showPassword1,
    });
  };

  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.current.value) return toast.error("An input is required");
    if (!email.current.value) return toast.error("An email is required");
    if (!password.current.value) return toast.error("Password is required");
    if (!confirmPassword.current.value) return toast.error("Please confirm password");

    const user = {
      username: username.current.value,
      password: password.current.value,
    };

    try {
      let res = await axios.post(
        "https://frooto-api.herokuapp.com/api/v1/auth/register",
        user
      );
      if (res.data.success) toast.success(res.data.msg);
      window.location.href = "/user/verify";
    } catch (err) {
      if (!err.response.data.success) return toast.error(err.response.data.msg);
    }
  };

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

<<<<<<< HEAD
          <TextField
            label="Email address"
            id="filled-start-adornment"
            sx={{ m: 1, width: "30ch" }}
            variant="filled"
            type="email"
            value={values.email}
          />

          <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword1 ? "text" : "password"}
              inputRef={password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
=======
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!firstname.current.value) return toast.error("First name is required");
		if (!lastname.current.value) return toast.error("Last name is required");
		if (!username.current.value) return toast.error("Username is required");
		if (!email.current.value) return toast.error("Email address is required");
		if (!password.current.value) return toast.error("Password is required");
		const user = {
			firstname: firstname.current.value,
			lastname: lastname.current.value,
			username: username.current.value,
			email: email.current.value,
			password: password.current.value,
		};
		
		// https://frooto-api.herokuapp.com/
		try {
			let res = await axios.post(
				"http://localhost:5000/api/v1/auth/register",
				user,
			);
			if (res.data.success) toast.success(res.data.msg);
			window.location.href = "/user/verify";
		} catch (err) {
			if (!err.response.data.success) return toast.error(err.response.data.msg);
		}
	};
>>>>>>> 1e899311c1bdcbc302df61ec71ccf7ce554d6dfa

          <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Confirm Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword2 ? "text" : "password"}
              inputRef={confirmPassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword2 ? <VisibilityOff /> : <Visibility />}
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
};

export default Register;
