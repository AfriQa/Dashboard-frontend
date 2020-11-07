import StateObjectModel from "../../../wrappers/StateModels/StateObjectModel/"
import { FETCH_TAG, FetchBody } from "./Queries/Fetch"
import { EDIT_TAG, EditBody } from "./Queries/Edit"

const UserInfo = new StateObjectModel({ stateName: "user_info" })

UserInfo.setInitialState()
UserInfo.createSlice()

export const {
    stateName, reducer
} = UserInfo.getEntity()

export const {
    Add, Fetch, Edit, Remove
} = UserInfo.getAPIHandles()

export const {
    selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus, selectData
} = UserInfo.getSelectors()

export { selectData as selectUserInfo }

export default reducer

export const fetchUserInfo = (id) => {
    return Fetch(FetchBody(id), FETCH_TAG)
}

export const editUserInfo = (userInfo) => {
    return Edit(EditBody(userInfo), EDIT_TAG)
}