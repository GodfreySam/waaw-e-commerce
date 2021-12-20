import axios from "axios";
import toast from "react-hot-toast";

export const loginCall = async (userCredentials, dispatch) => {
	dispatch({ type: "LOGIN_START" });

	try {
		let res = await axios.post("http://localhost:5000/api/v1/auth/login", userCredentials);
		if (res.data.success) toast.success(res.data.msg);
		dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
		window.location.href = `/home/${res.data.data.user._id}`;
	} catch (err) {
		const errData = err.response && err.response.data.msg ? err.response.data.msg : err.msg;
		dispatch({ type: "LOGIN_FAILURE", payload: errData });
		return toast.error(errData);
	}
};