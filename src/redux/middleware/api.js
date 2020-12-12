import axios from "axios"
import * as actions from "../api"
import endPoints from "../../constants/endPoints"
// import { toast } from "react-toastify"

// axios.defaults.baseURL = "https://sparta-finance.herokuapp.com/api/v1"
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  if (!expectedError) {
    console.log(error) // log error
    // toast.error("An unexpected error occurred.") //display a genereic message
  }
  return Promise.reject(error)
})

const defaultAction = {
  payload: {
    body: null,
    tag: null,
    onStart: null,
    onSuccess: null,
    onFailure: null,
    socketUpdate: null
  }
}

const sendRequest = async (action, dispatch, next) => {
  if (action.type !== actions.apiCallBegan.type) return next(action)

  const url = endPoints.deployed ? endPoints.deployedUrl : endPoints.localUrl

  const { body, tag, onStart, onSuccess, onFailure, callback } = action.payload

  if (onStart) dispatch({ type: onStart })
  next(action)
  try {
    console.log("dssdvsdvsdv", url)
    const response = await axios.request({
      url,
      method: "POST",
      data: body,
    })
    //General
    dispatch(actions.apiCallSuccess(response.data.data[tag]))
    //Specific
    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response.data.data[tag] })
    }
  } catch (error) {
    console.log("herer", error)
    //General
    dispatch(actions.apiCallFailed(error.message))
    try {
      //Specific
      if (onFailure) {
        if (
          error.response &&
          (error.response.status === 400 ||
            error.response.status === 403 ||
            error.response.status === 401) ||
          error.response.status === 404
        ) {
          console.log(error.response)
          dispatch({ type: onFailure, payload: error.response.data.errors })
        } else {
          callback({ type: onFailure, payload: error.message })
          dispatch({ type: onFailure, payload: error.message })
        }
      }
    } catch (e) {
      console.error(e)
    }
  }
}

const socketStateUpdate = (action, dispatch, next) => {
  dispatch({ type: action.payload.socketUpdate, payload: action.payload.payload })
  next({ type: action.payload.socketUpdate, payload: action.payload.payload })
}

const api = ({ dispatch, getState }) => (next) => async (action = defaultAction) => {
  if (typeof action.payload !== "undefined") {
    if (
      typeof action.payload.socketUpdate !== "undefined" &&
      typeof action.payload.onSocketUpdate !== "undefined" && action.payload.socketUpdate
    ) {
      console.log("herer", action.payload.socketUpdate)
      return await socketStateUpdate(action, dispatch, next)
    } else {
      return await sendRequest(action, dispatch, next)
    }
  }

  if (action.type !== actions.apiCallBegan.type) return next(action)

  const url = endPoints.deployed ? endPoints.deployedUrl : endPoints.localUrl

  const { body, tag, onStart, onSuccess, onFailure, callback } = action.payload

  if (onStart) dispatch({ type: onStart })
  next(action)
  try {
    const response = await axios.request({
      url,
      method: "POST",
      data: body,
    })
    //General
    dispatch(actions.apiCallSuccess(response.data.data[tag]))
    //Specific
    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response.data.data[tag] })
    }
  } catch (error) {
    //General
    dispatch(actions.apiCallFailed(error.message))
    try {
      //Specific
      if (onFailure) {
        if (
          error.response &&
          (error.response.status === 400 ||
            error.response.status === 403 ||
            error.response.status === 401) ||
          error.response.status === 404
        ) {
          console.log(error.response)
          dispatch({ type: onFailure, payload: error.response.data.errors })
        } else {
          callback({ type: onFailure, payload: error.message })
          dispatch({ type: onFailure, payload: error.message })
        }
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default api
