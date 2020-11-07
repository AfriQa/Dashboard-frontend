import axios from "axios"
import * as actions from "../api"
import endPoints from "../../constants/endPoints"

const api = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action)

  const url = endPoints.deployed? endPoints.deployedUrl : endPoints.localUrl
  const { body, tag, onStart, onSuccess, onFailure } = action.payload
  if (onStart) dispatch({ type: onStart })
  next(action)
  try {
    const response = await axios.post(url, body)
    //General
    dispatch(actions.apiCallSuccess(response.data.data[tag]))
    //Specific
    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response.data.data[tag] })
    }
  } catch (error) {
    console.log("Error Occured", error.response)
    //General
    dispatch(actions.apiCallFailed(error.message))
    //Specific
    if (onFailure) {
      if (
        error.response &&
        (error.response.status === 400 ||
          error.response.status === 403 ||
          error.response.status === 401)
      ) {
        console.log(error.response.data)
        dispatch({ type: onFailure, payload: error.response.data })
      } else {
        dispatch({ type: onFailure, payload: error.statusText })
      }
    }
  }
}

export default api
