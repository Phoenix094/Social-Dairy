import { combineReducers } from "redux";

import posts from "./posts";
import authUser from "./auth";

export default combineReducers({ posts: posts, authUser: authUser });
