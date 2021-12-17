import axios from "axios";
import toast from "react-hot-toast";

export const loginCall = async (userCredentials, authDispatch) => {
	authDispatch({ type: "LOGIN_START" });

	try {
		let res = await axios.post(
			"/api/v1/auth/login",
			userCredentials,
		);
		if (res.data.success) toast.success(res.data.msg);

		authDispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
		window.location.href = "/";
	} catch (err) {
		if (!err.response.data.success) return toast.error(err.response.data.msg);
		authDispatch({ type: "LOGIN_FAILURE", payload: err });
	}
};
