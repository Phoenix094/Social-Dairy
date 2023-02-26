import * as api from "../api";

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchApi();

		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const creatPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.creatPost(post);

		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};
