import React, { useState, useEffect }from 'react'
import AccountView from "./AccountView"
import {
  selectUserInfo, selectFetchStatus,
  editUserInfo, selectEditStatus
} from "../../../redux/States/UserInfo"
import { connect } from "react-redux"
import { reduxStatus } from "../../../constants/reduxStatus"

const Loader = ({
  fetchStatus, userInfo,
  editStatus, editUserInfo
}) => {
  const [fetchLock, setFetchLock] = useState(true)
  const [editLock, setEditLock] = useState(true)

  useEffect(() => {
    const { status } = fetchStatus
    if (status === reduxStatus.failure && !fetchLock) {
      console.error("Failed fetching user info")
    }

    setFetchLock(true)
  }, [fetchStatus, setFetchLock, fetchLock])

  useEffect(() => {
    const { status } = editStatus
    if (status === reduxStatus.failure && !fetchLock) {
      console.error("Failed editing user info")
    }

    setEditLock(true)
  }, [editStatus, setEditLock, editLock])

  const _editUserInfo = (data) => {
    setEditLock(false)
    editUserInfo({
        ...data
    })
  }

  return (
    <AccountView
      userInfo={userInfo}
      editUserInfo={_editUserInfo}
      doneEdit={editStatus.status === reduxStatus.success && !editLock}
    />
  )
}

const mapStateToProps = state => ({
  userInfo: selectUserInfo(state),
  fetchStatus: selectFetchStatus(state),
  editStatus: selectEditStatus(state)
})

const mapDispatchToProps = dispatch => ({
  editUserInfo: (data) => dispatch(editUserInfo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)