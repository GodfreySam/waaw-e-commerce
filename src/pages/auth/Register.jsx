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

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    showPassword: false,
  });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword1 = () => {
  //   setValues({
  //     ...values,
  //     showPassword1: !values.showPassword1,
  //   });
  // };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
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

          <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              inputRef={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
