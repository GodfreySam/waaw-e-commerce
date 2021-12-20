import React, {useEffect, useState } from "react";
import axios from "axios";
import "./auth.css";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const VerifyUser = () => {
	// const token = useRef();
	const { reset_token } = useParams();
	const [resetToken, setResetToken] = useState();

	console.log(resetToken);
	
	useEffect(() => {
		setResetToken(reset_token)
	}, [reset_token])

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!resetToken) return toast.error("Token is required");
	
		const user = {
			token: resetToken,
		};

		// https://frooto-api.herokuapp.com/
		
		try {
			let res = await axios.post(
				"https://frooto-api.herokuapp.com/api/v1/auth/verify",
				user,
			);
			if (res.data.success) toast.success(res.data.msg);
			window.location.href = "/user/login";
		} catch (err) {
			if (!err.response.data.success) return toast.error(err.response.data.msg);
		}
	};

	return (
		<div className="register">
			<div className="form-flex">
				<div className="container-form register-form">
					<div className="heading">
						<h1>User Email Veriffication</h1>
					</div>
					<br />
					<br />
					<form onSubmit={handleSubmit} className="auth register-form">
						<label for="token">Verification Token</label>
						<input
							type="text"
							name="text"
							id=""
							placeholder="email verification token"
							value={resetToken}
							onChange={(e) => setResetToken(e.target.value)}
						/>
						<input className="form__submit-button" type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default VerifyUser;
