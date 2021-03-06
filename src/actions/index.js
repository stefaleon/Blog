import { FETCH_POSTS } from "./types";

import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const res = await jsonPlaceholder.get("/posts");

  dispatch({ type: FETCH_POSTS, payload: res.data });
};
