import axios from "axios";
import * as actions from "../api";
import endPoints from "../../constants/endPoints"
// import { toast } from "react-toastify";

// axios.defaults.baseURL = "https://sparta-finance.herokuapp.com/api/v1";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log(error); // log error
    // toast.error("An unexpected error occurred."); //display a genereic message
  }
  return Promise.reject(error);
});

const api = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const url = endPoints.deployed? endPoints.deployedUrl : endPoints.localUrl

  const { body, tag, method, onStart, onSuccess, onFailure, callback } = action.payload;
  if (onStart) dispatch({ type: onStart });
  next(action);
  try {
    const response = await axios.request({
      url,
      method,
      data: body,
    });
    //General
    dispatch(actions.apiCallSuccess(response.data[tag]));
    //Specific
    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response.data[tag] })
      callback({ type: onSuccess, payload: response.data[tag] })
    }
  } catch (error) {
    //General
    dispatch(actions.apiCallFailed(error.message));
    //Specific
    if (onFailure) {
      if (
        error.response &&
        (error.response.status === 400 ||
          error.response.status === 403 ||
          error.response.status === 401)
      ) {
        console.log(error.response.data.errors);
        callback({ type: onFailure, payload: error.response.data.errors })
        dispatch({ type: onFailure, payload: error.response.data.errors });
      } else {
        callback({ type: onFailure, payload: error.message })
        dispatch({ type: onFailure, payload: error.message })
      };
    }
  }
};

export default api;
