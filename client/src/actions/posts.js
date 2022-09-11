import * as api from "../api";

//Action creators

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", paylode: data });
  } catch (error) {
    console.log(error.message);
  }
};
