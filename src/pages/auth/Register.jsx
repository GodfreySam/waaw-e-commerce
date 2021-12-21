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
  const firstname = useRef();
  const lastname = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const [values, setValues] = useState({
			firstname: "",
			lastname: "",
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			showPassword: false,
			showPassword1: false,
		});

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  const handleClickShowPassword1 = () => {
    setValues({
      ...values,
      showPassword1: !values.showPassword1,
    });
  };

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
    if (!firstname.current.value) return toast.error("First name is required");
    if (!lastname.current.value) return toast.error("Last name is required");
    if (!username.current.value) return toast.error("User name is required");
    if (!email.current.value) return toast.error("An email is required");
    if (!password.current.value) return toast.error("Password is required");
		if (!confirmPassword.current.value) return toast.error("Password is required");

    const user = {
					firstname: firstname.current.value,
					lastname: lastname.current.value,
					email: email.current.value,
					username: username.current.value,
					password: password.current.value,
					confirmPassword: confirmPassword.current.value,
				};

    try {
      let res = await axios.post(
        "https://frooto-api.herokuapp.com/api/v1/auth/register",
        user
      );
      if (res.data.success) toast.success(res.data.msg);
      window.location.href = "/user/verify";
    } catch (err) {
      const errData = err.response && err.response.data.msg ? err.response.data.msg : err.msg;
  		return toast.error(errData);
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
							label="First Name"
							id="filled-start-adornment"
							sx={{ m: 1, width: "35ch" }}
							variant="filled"
							type="text"
							inputRef={firstname}
						/>

						<TextField
							label="Last Name"
							id="filled-start-adornment"
							sx={{ m: 1, width: "35ch" }}
							variant="filled"
							type="text"
							inputRef={lastname}
						/>

						<TextField
							label="Email"
							id="filled-start-adornment"
							sx={{ m: 1, width: "35ch" }}
							variant="filled"
							type="text"
							inputRef={email}
						/>

						<TextField
							label="Username"
							id="filled-start-adornment"
							sx={{ m: 1, width: "35ch" }}
							variant="filled"
							type="text"
							inputRef={username}
						/>

						<FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
							<InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
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

						<FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
							<InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
							<FilledInput
								id="filled-adornment-password"
								type={values.showPassword ? "text" : "password"}
								inputRef={confirmPassword}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword1}
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
